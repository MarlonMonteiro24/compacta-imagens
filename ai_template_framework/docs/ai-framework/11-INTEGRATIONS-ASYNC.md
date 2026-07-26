# Integrations and Async Processing

## Objetivo
Garantir integrações robustas e seguras operacionalmente.

## Regras para chamadas externas
- toda chamada deve considerar timeout
- retry deve ter critério
- usar backoff quando aplicável
- respeitar rate limit
- validar resposta recebida
- registrar falhas com contexto útil

## Idempotência
- ações reexecutáveis devem ser protegidas contra duplicidade
- operações críticas devem ter controle de repetição

## Concorrência
- não usar paralelismo bruto sem necessidade
- limitar concorrência em lotes grandes
- proteger API externa, banco e filas
- preferir batch ou fila quando fizer sentido

## Quando usar cada abordagem
### Síncrono
- resposta imediata necessária
- operação curta
- baixa chance de instabilidade externa

### Assíncrono
- processo demorado
- alto volume
- integração instável
- reprocessamento necessário

## Jobs e filas
- definir tentativas
- definir logs
- definir estratégia de reprocessamento
- prever dead letter ou equivalente quando houver falha persistente

## Anti-padrões proibidos
- Promise.all sem controle em alto volume
- integração sem timeout
- integração sem tratamento de falha
- payload externo sem validação
- reprocessamento sem idempotência
