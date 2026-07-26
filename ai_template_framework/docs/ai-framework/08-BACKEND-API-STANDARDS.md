# Backend and API Standards

## Objetivo
Padronizar a construção de backend e API com previsibilidade, segurança e boa manutenção.

## Princípios
- contratos claros
- validação em runtime
- tratamento de erro consistente
- paginação, filtros e ordenação padronizados
- separação entre transporte HTTP e regra de negócio

## Estrutura recomendada
- route ou controller
- schema de validação
- service ou use case
- repository ou data access
- mapper ou serializer quando necessário

## Regras para endpoints
- todo endpoint deve validar input
- toda resposta deve seguir contrato claro
- listagens devem considerar paginação quando aplicável
- autorização deve ser validada no backend
- operações críticas devem registrar contexto mínimo

## Paginação, filtros e ordenação
- definir padrão único para listagem
- evitar retorno ilimitado
- documentar parâmetros aceitos
- limitar ordenações e filtros a campos suportados

## Tratamento de erro
- erro de validação
- erro de autenticação
- erro de autorização
- erro de negócio
- erro interno
- nunca vazar stack trace ou detalhe sensível

## Anti-padrões proibidos
- regra de negócio no controller
- acesso direto ao banco na rota
- endpoint sem validação
- resposta inconsistente para o mesmo tipo de falha
- mistura de lógica de autorização com apresentação
