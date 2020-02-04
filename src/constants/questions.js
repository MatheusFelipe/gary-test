const [A, B, C, D, E] = ['A', 'B', 'C', 'D', 'E'];

export const LETTERS = {
  A,
  B,
  C,
  D,
  E,
};

const questions = [
  [
    { alternative: A, body: 'Gosto de receber palavras de afirmação' },
    { alternative: E, body: 'Gosto de receber abraços' },
  ],
  [
    { alternative: B, body: 'Gosto de passar tempo a sós com alguém especial para mim' },
    { alternative: D, body: 'Sinto-me amada quando alguém me oferece ajuda prática' },
  ],
  [
    { alternative: C, body: 'Gosto quando ganho presentes' },
    { alternative: B, body: 'Gosto de visitas sem pressa com amigos e entes queridos' },
  ],
  [
    { alternative: D, body: 'Sinto-me amado quando as pessoas fazem coisas para me ajudar' },
    { alternative: E, body: 'Sinto-me amado quando as pessoas me tocam' },
  ],
  [
    { alternative: E, body: 'Sinto-me amado quando alguém que amo ou admiro me rodeia com o braço' },
    { alternative: C, body: 'Sinto-me amado quando recebo um presente de alguém que amo e admiro' },
  ],
  [
    { alternative: B, body: 'Gosto de sair com amigos e entes queridos' },
    { alternative: E, body: 'Gosto de bater palma com palma ou ficar de mãos dadas com pessoas especiais para mim' },
  ],
  [
    { alternative: C, body: 'Símbolos visíveis de amor (presentes) são importantes para mim' },
    { alternative: A, body: 'Sinto-me amado quando as pessoas me afirmam' },
  ],
  [
    { alternative: E, body: 'Gosto de sentar perto das pessoas a quem aprecio' },
    { alternative: A, body: 'Gosto de que me digam que sou atraente/bonito' },
  ],
  [
    { alternative: B, body: 'Gosto de passar tempo com amigos e entes queridos' },
    { alternative: C, body: 'Gosto de receber presentinhos de amigos e entes queridos' },
  ],
  [
    { alternative: A, body: 'Palavras de aceitação são importantes para mim' },
    { alternative: D, body: 'Sei que alguém me ama quando ele me ajuda' },
  ],
  [
    { alternative: B, body: 'Gosto de estar junto e fazer coisas com amigos e entes queridos' },
    { alternative: A, body: 'Gosto quando me dizem palavras bondosas' },
  ],
  [
    { alternative: D, body: 'O que a pessoa faz me afeta mais que aquilo que ela diz' },
    { alternative: E, body: 'Os abraços me fazem sentir participante e apreciado' },
  ],
  [
    { alternative: A, body: 'Aprecio o louvor e tento evitar as críticas' },
    { alternative: C, body: 'Vários presentes pequenos significam para mim mais que um grande' },
  ],
  [
    { alternative: B, body: 'Sinto-me íntimo de alguém quando estamos conversando ou fazendo coisas juntos' },
    { alternative: E, body: 'Sinto-me mais perto dos amigos e entes queridos quando eles me tocam com frequência' },
  ],
  [
    { alternative: A, body: 'Gosto que as pessoas elogiem minhas realizações' },
    { alternative: D, body: 'Sei que as pessoas me amam quando fazem coisas para mim que si mesma não apreciam' },
  ],
  [
    { alternative: E, body: 'Gosto de ser tocado quando amigos e entes queridos passam por perto de mim' },
    { alternative: B, body: 'Gosto quando as pessoas me ouvem e mostram interesse genuíno no que estou dizendo' },
  ],
  [
    { alternative: D, body: 'Sinto-me amado quando amigos e entes queridos me ajudam nos trabalhos e projetos' },
    { alternative: C, body: 'Gosto realmente de receber presentes de amigos e entes queridos' },
  ],
  [
    { alternative: A, body: 'Gosto quando as pessoas elogiam minha aparência' },
    { alternative: B, body: 'Sinto-me amado quando as pessoas tomam tempo para entender meus sentimentos' },
  ],
  [
    { alternative: E, body: 'Sinto-me seguro quando uma pessoa especial toca em mim' },
    { alternative: D, body: 'Atos de serviço fazem com que me sinta amado' },
  ],
  [
    { alternative: D, body: 'Aprecio as mutas coisas que as pessoas especiais fazem para mim' },
    { alternative: C, body: 'Gosto de receber presentes que as pessoas especiais fazem para mim' },
  ],
  [
    { alternative: B, body: 'Aprecio realmente o sentimento que tenho quando alguém me dá total atenção' },
    { alternative: D, body: 'Aprecio realmente o sentimento que tenho quando alguém me presta algum ato de serviço' },
  ],
  [
    { alternative: C, body: 'Sinto-me amado quando uma pessoa comemora meu aniversário com um presente' },
    { alternative: A, body: 'Sinto-me amado quando uma pessoa comemora meu aniversário com palavras significativas' },
  ],
  [
    { alternative: C, body: 'Sei o que a pessoa está pensando de mim quando me dá um presente' },
    { alternative: D, body: 'Sinto-me amado quando a pessoa me ajuda nas tarefas diárias' },
  ],
  [
    { alternative: B, body: 'Aprecio quando alguém ouve com paciência e não me interrompe' },
    { alternative: C, body: 'Aprecio quando alguém se lembra de dias especiais com um presente' },
  ],
  [
    { alternative: D, body: 'Gosto de saber que os entes queridos estão preocupados em me ajudar nas tarefas diárias' },
    { alternative: B, body: 'Gosto de fazer viagens longas com alguém que é especial para mim' },
  ],
  [
    { alternative: E, body: 'Gosto de beijar ou ser beijado por pessoa de minha intimidade' },
    { alternative: C, body: 'Receber um presente sem qualquer razão especial me deixa contente' },
  ],
  [
    { alternative: A, body: 'Gosto que me digam que sou querido' },
    { alternative: B, body: 'Gosto quando a pessoa olhe para mim enquanto falamos' },
  ],
  [
    { alternative: C, body: 'Presentes de um amigo ou ente querido são sempre especiais para mim' },
    { alternative: E, body: 'Sinto-me bem quando um amigo ou ente querido me toca' },
  ],
  [
    { alternative: D, body: 'Sinto-me amado quando alguém faz com entusiasmo o que eu pedi' },
    { alternative: A, body: 'Sinto-me amado quando dizem quanto me apreciam' },
  ],
  [
    { alternative: E, body: 'Preciso ser tocado todos os dias' },
    { alternative: A, body: 'Preciso de palavras de afirmação todos os dias' },
  ],
];

export default questions;
