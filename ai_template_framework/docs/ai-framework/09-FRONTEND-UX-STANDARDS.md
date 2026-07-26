# Frontend and UX Standards

## Objetivo
Garantir uma interface organizada, previsível, usável e sustentável.

## Princípios
- componentes reutilizáveis
- clareza visual
- baixo acoplamento
- UX mínima obrigatória
- estados bem tratados

## Regras de interface
- toda ação relevante deve dar feedback visual
- formulários devem mostrar erro de forma clara
- telas devem tratar loading, vazio e erro
- ações destrutivas devem pedir confirmação
- navegação deve ser clara e consistente

## Estrutura
- componentes de apresentação
- containers ou fluxos quando necessário
- hooks e serviços separados da UI
- validação de formulário explícita

## Responsividade
- funcionamento mínimo em desktop e mobile conforme escopo
- elementos críticos não podem quebrar layout
- priorizar legibilidade e navegabilidade

## Acessibilidade básica
- labels corretos
- foco visível
- contraste suficiente
- semântica adequada
- uso consistente de botões e links

## Anti-padrões proibidos
- lógica complexa escondida dentro de componente visual
- tela sem tratamento de erro
- feedback invisível ao usuário
- formulário sem validação clara
- componente gigante sem responsabilidade definida
