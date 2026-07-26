# Review Checklist

## Escopo
- a mudança atende exatamente ao pedido?
- não houve aumento indevido de escopo?

## Arquitetura
- respeitou camadas?
- evitou acoplamento ruim?
- evitou duplicação desnecessária?

## Backend
- validou entrada?
- tratou erro?
- respeitou contrato?
- aplicou autorização quando necessário?

## Frontend
- há loading, erro e vazio?
- o fluxo está claro?
- há feedback visual suficiente?

## Banco
- migration segura?
- impacto avaliado?
- índice necessário considerado?

## Segurança
- input validado?
- segredo protegido?
- nada sensível exposto?
- permissão checada no backend?

## Integrações
- timeout?
- retry?
- concorrência controlada?
- resposta externa validada?

## Qualidade
- código legível?
- responsabilidade clara?
- testes mínimos cobertos?

## Operação
- logs úteis?
- rastreabilidade suficiente?
- impacto pós-deploy considerado?

## Conclusão
Só considerar pronto quando os pontos aplicáveis estiverem atendidos.
