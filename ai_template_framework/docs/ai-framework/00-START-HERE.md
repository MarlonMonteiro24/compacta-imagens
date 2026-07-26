# START HERE

## Objetivo
Este projeto é desenvolvido com IA guiada por documentação. Antes de alterar código, a IA e qualquer pessoa do time devem ler os arquivos desta pasta e seguir as regras descritas aqui.

## Ordem obrigatória de leitura
1. `01-PROJECT-VISION.md`
2. `02-SCOPE-AND-ACCEPTANCE.md`
3. `03-BUSINESS-RULES.md`
4. `04-USER-FLOWS.md`
5. `05-ARCHITECTURE.md`
6. `10-VALIDATION-SECURITY.md`
7. `15-AI-WORKFLOW.md`
8. `16-REVIEW-CHECKLIST.md`

## Missão da IA
Implementar o sistema com foco em:
- arquitetura coerente
- segurança mínima obrigatória
- validação de dados em runtime
- contratos claros
- legibilidade do código
- boa experiência do usuário
- rastreabilidade da mudança
- menor escopo útil

## Regras inegociáveis
- Não mudar escopo sem sinalizar.
- Não criar endpoint sem validação.
- Não confiar em input externo sem schema.
- Não confiar em permissão do frontend.
- Não refatorar amplo sem necessidade clara.
- Não alterar arquitetura sem justificar.
- Não integrar API externa sem timeout, retry e controle de concorrência.
- Não considerar a entrega pronta sem passar pelo checklist final.

## Fluxo padrão de trabalho
1. Ler os documentos relevantes.
2. Entender o objetivo da tarefa.
3. Mapear arquivos impactados.
4. Propor abordagem.
5. Implementar na menor fatia útil.
6. Validar.
7. Reportar o que foi alterado, riscos e próximos passos.

## Quando parar e pedir decisão humana
- mudança de escopo
- alteração de contrato público
- mudança de schema sensível
- decisão de arquitetura
- dúvida em regra de negócio
- risco de segurança
- integração com comportamento ambíguo
- necessidade de quebrar regra desta documentação
