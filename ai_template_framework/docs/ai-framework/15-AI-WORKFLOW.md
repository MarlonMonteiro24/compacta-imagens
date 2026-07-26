# AI Development Workflow

## Papel da IA neste projeto
A IA deve atuar como implementadora guiada por arquitetura, regras e checklist. Ela não deve improvisar escopo nem ignorar restrições.

## Ordem de execução obrigatória
1. Ler os arquivos de contexto do projeto.
2. Identificar quais documentos são relevantes para a tarefa.
3. Mapear arquivos impactados.
4. Explicar abordagem proposta.
5. Implementar na menor fatia útil.
6. Validar a implementação contra o checklist.
7. Reportar:
   - arquivos alterados
   - riscos
   - pendências
   - próximos passos

## Regras operacionais
- Não mudar o escopo sozinho.
- Não refatorar além do necessário.
- Não alterar contratos públicos sem registrar.
- Não criar código inseguro por conveniência.
- Não assumir happy path como suficiente.
- Não misturar responsabilidades entre camadas.
- Não ignorar tratamento de erro.
- Não integrar API externa sem proteção operacional.

## Quando mapear antes de implementar
- tarefa em domínio desconhecido
- impacto em múltiplas camadas
- mudança sensível
- integração nova
- alteração estrutural

## Quando pode implementar direto
- ajuste localizado
- mudança de baixo impacto
- tarefa com contexto já claro
- alteração pequena em domínio conhecido

## Saída esperada da IA em cada entrega
1. resumo do que entendeu
2. abordagem escolhida
3. arquivos alterados
4. validações realizadas
5. riscos identificados
6. próximos passos sugeridos

## Situações em que a IA deve parar e sinalizar
- conflito entre documentos
- regra de negócio ambígua
- risco de segurança
- mudança de contrato
- decisão de arquitetura
- necessidade de alterar escopo
