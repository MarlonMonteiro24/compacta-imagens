# Architecture

## Arquitetura escolhida
[Ex.: aplicação web com frontend e backend separados / monólito modular / BFF]

## Princípios arquiteturais
- separação clara de responsabilidades
- regra de negócio fora da camada visual
- validação de entrada obrigatória
- contratos explícitos
- baixo acoplamento
- modularização por domínio ou feature

## Camadas

### Frontend
Responsável por interface, fluxo do usuário, consumo de API e tratamento visual dos estados.

### Backend / API
Responsável por validação, autorização, orquestração do caso de uso, integração e persistência.

### Domínio / Serviços
Responsável por regra de negócio e decisões funcionais do sistema.

### Persistência / Infraestrutura
Responsável por banco, filas, integrações externas, armazenamento e recursos técnicos.

## Regras de organização
- controller e rota não devem concentrar regra de negócio
- service não deve depender da UI
- repository não deve decidir regra funcional
- componente visual não deve conter lógica de negócio complexa
- utilitários não devem virar depósito genérico de regra

## Anti-padrões proibidos
- lógica de negócio espalhada pela interface
- acesso direto ao banco na camada errada
- função monstro
- duplicação desnecessária
- endpoint que faz tudo
- abstração prematura sem necessidade

## Mudanças de arquitetura
Toda mudança arquitetural relevante deve ser registrada em `17-DECISIONS-ROADMAP.md`.
