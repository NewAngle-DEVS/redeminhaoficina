import { forwardRef, useEffect, useImperativeHandle, useRef, useState } from 'react';
import type { MotorEngine } from '../three/motorEngine';

export interface MotorSceneHandle { setProgress: (value: number) => void; }

const MotorScene = forwardRef<MotorSceneHandle>(function MotorScene(_, ref) {
  const host = useRef<HTMLDivElement>(null);
  const engine = useRef<MotorEngine | null>(null);
  const progress = useRef(0);
  const [ready, setReady] = useState(false);
  const [failed, setFailed] = useState(false);
  useImperativeHandle(ref, () => ({ setProgress(value) { progress.current = value; engine.current?.setProgress(value); } }), []);
  useEffect(() => {
    let cancelled = false;
    import('../three/motorEngine').then(({ createMotorEngine }) => {
      if (cancelled || !host.current) return;
      try {
        engine.current = createMotorEngine(host.current, () => { setReady(false); setFailed(true); });
        engine.current.setProgress(progress.current);
        setReady(true);
      } catch { setFailed(true); }
    }).catch(() => { if (!cancelled) setFailed(true); });
    return () => { cancelled = true; engine.current?.dispose(); engine.current = null; };
  }, []);
  return (
    <figure className={`motor-visual ${ready ? 'is-ready' : ''} ${failed ? 'is-fallback' : ''}`} aria-label="Motor de quatro cilindros em 3D, com peças que se separam conforme a rolagem.">
      {failed && <img className="motor-poster" src={`${import.meta.env.BASE_URL}images/motor-study.png`} alt="Estudo ilustrativo de um motor de quatro cilindros" width="1000" height="1000" />}
      <div className="motor-halo" aria-hidden="true" />
      <div ref={host} className="motor-canvas-host" aria-hidden="true" />
      <figcaption className="sr-only">Modelo conceitual: tampa, cabeçote, pistões, bloco, virabrequim e cárter.</figcaption>
    </figure>
  );
});
export default MotorScene;

