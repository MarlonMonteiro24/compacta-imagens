# Testing and Quality

## Objetivo
Garantir que velocidade de desenvolvimento não vire regressão.

## Estratégia mínima
- testar regra de negócio crítica
- testar integração relevante
- testar fluxo principal
- validar contrato onde o risco justificar

## Tipos de teste
### Unitário
- regras isoladas
- funções críticas
- validações

### Integração
- API + banco
- integração entre módulos
- contratos internos

### E2E
- fluxo principal do usuário
- casos de maior impacto

## O que é obrigatório testar
- regra de negócio central
- validação de entrada
- autorização crítica
- fluxo principal do caso de uso

## O que revisar além de teste
- legibilidade
- responsabilidade de camadas
- segurança
- observabilidade
- consistência com arquitetura

## Observação
Nem tudo exige cobertura alta. O foco é proteger o que é crítico e reduzir risco real.
