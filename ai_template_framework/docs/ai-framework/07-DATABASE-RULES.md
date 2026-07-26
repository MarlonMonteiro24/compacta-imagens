# Database Rules

## Diretrizes gerais
- modelagem relacional clara
- nomes consistentes
- integridade referencial
- índices em campos de filtro recorrente
- migration sempre versionada

## Convenções
- tabelas: plural ou singular conforme padrão do projeto
- colunas: snake_case ou camelCase conforme padrão do projeto
- chaves primárias: id ou padrão definido
- timestamps: created_at, updated_at e equivalentes

## Regras obrigatórias
- não criar coluna genérica sem justificativa
- não quebrar compatibilidade de migration sem plano
- não remover coluna usada sem avaliar impacto
- não criar query ineficiente sem necessidade comprovada

## Índices esperados
- campos de filtro
- foreign keys
- campos de ordenação frequente
- campos com unicidade

## Cuidados de performance
- evitar N+1
- evitar paginação ingênua em grandes volumes
- evitar consultas sem filtro em tabelas grandes
- avaliar concorrência e lock em escrita sensível

## Checklist de migration
- impacto em produção avaliado
- rollback considerado
- dados existentes preservados
- compatibilidade checada
- janela de aplicação entendida
