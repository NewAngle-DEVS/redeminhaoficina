export const company = {
  name: 'Minha Oficina',
  city: 'Limeira, SP',
  phone: '(19) 3704-1213',
  telephone: '+551937041213',
  whatsapp: '551937041213',
  instagram: 'https://www.instagram.com/rede.minhaoficina/',
  instagramHandle: '@rede.minhaoficina',
  street: 'Rua Dr. Oleg\u00e1rio Toledo Barros, 171',
  district: 'Vila Santa L\u00facia',
  postcode: '13486-068',
  maps: 'https://www.google.com/maps/search/?api=1&query=Rua+Doutor+Olegario+Toledo+Barros+171+Vila+Santa+Lucia+Limeira+SP',
};

export function whatsappLink(message = 'Ol\u00e1, Minha Oficina! Gostaria de conversar sobre uma revis\u00e3o para o meu carro.') {
  return `https://wa.me/${company.whatsapp}?text=${encodeURIComponent(message)}`;
}

export const navigation = [
  { label: 'Nossa história', href: '#historia' },
  { label: 'Cuidados', href: '#cuidados' },
  { label: 'A oficina', href: '#oficina' },
  { label: 'Contato', href: '#contato' },
];

export const services = [
  {
    number: '01',
    title: 'Revis\u00e3o automotiva',
    description: 'Antes de uma viagem ou na rotina, a revis\u00e3o \u00e9 o momento de olhar com aten\u00e7\u00e3o para o seu carro. Converse com a equipe para combinar sua visita.',
    action: 'Conversar sobre revis\u00e3o',
    message: 'Ol\u00e1! Gostaria de agendar uma revis\u00e3o na Minha Oficina. Como podemos combinar?',
  },
  {
    number: '02',
    title: 'Manuten\u00e7\u00e3o mec\u00e2nica',
    description: 'Um ru\u00eddo diferente, uma mudan\u00e7a no comportamento ou algo que merece aten\u00e7\u00e3o? Conte o que voc\u00ea percebeu e consulte a equipe sobre o cuidado necess\u00e1rio.',
    action: 'Falar sobre meu carro',
    message: 'Ol\u00e1! Meu carro precisa de aten\u00e7\u00e3o. Gostaria de conversar sobre manuten\u00e7\u00e3o mec\u00e2nica.',
  },
  {
    number: '03',
    title: 'Cuidado preventivo',
    description: 'N\u00e3o precisa esperar um imprevisto para conversar sobre manuten\u00e7\u00e3o. Informe o modelo do seu ve\u00edculo e tire suas d\u00favidas sobre a pr\u00f3xima revis\u00e3o.',
    action: 'Planejar a pr\u00f3xima revis\u00e3o',
    message: 'Ol\u00e1! Quero me organizar para a pr\u00f3xima revis\u00e3o do meu carro. Podem me orientar?',
  },
];

export const questions = [
  {
    question: 'Como agendar uma visita?',
    answer: 'Fale com a Minha Oficina pelo WhatsApp (19) 3704-1213. Envie o modelo do carro e o motivo da visita para consultar a disponibilidade e combinar o atendimento.',
  },
  {
    question: 'Posso esperar na oficina?',
    answer: 'Sim. A Minha Oficina apresenta um ambiente de espera confort\u00e1vel, com Wi-Fi, \u00e1gua e bebidas. Fique \u00e0 vontade enquanto seu carro recebe aten\u00e7\u00e3o.',
  },
  {
    question: 'Como consultar hor\u00e1rios e or\u00e7amento?',
    answer: 'Atendemos de segunda a quinta, das 7h30 às 17h30, e sexta, das 7h30 às 16h30. Consulte a disponibilidade e o orçamento pelo WhatsApp. O site n\u00e3o realiza agendamentos autom\u00e1ticos nem informa pre\u00e7os sem avalia\u00e7\u00e3o.',
  },
];

export const workshopImage = {
  url: 'https://images.pexels.com/photos/7564871/pexels-photo-7564871.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200',
  alt: 'Imagem ilustrativa de m\u00e3os trabalhando na manuten\u00e7\u00e3o de um motor. Fotografia de cottonbro studio.',
  credit: 'https://www.pexels.com/photo/a-person-fixing-a-machine-7564871/',
};
