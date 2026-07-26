# Environments and Deploy

## Ambientes
- desenvolvimento
- homologação
- produção

## Regras por ambiente
- variáveis separadas
- segredos separados
- integrações controladas
- dados sensíveis protegidos

## Pipeline mínimo
- lint
- build
- testes definidos pelo projeto
- validações obrigatórias antes de merge e deploy

## Deploy
- estratégia de publicação definida
- migration segura
- verificação pós-deploy
- rollback considerado

## Feature flags
- usar quando houver risco funcional ou rollout gradual

## Anti-padrões proibidos
- deploy sem validação mínima
- migration destrutiva sem plano
- configuração manual sem rastreabilidade
- alteração em produção sem registro
