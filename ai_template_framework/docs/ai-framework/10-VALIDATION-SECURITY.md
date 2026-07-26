# Validation and Security

## Princípio central
TypeScript ajuda no desenvolvimento. Validação em runtime protege o sistema em execução.

## Regras obrigatórias
- validar body, query e params
- validar variáveis de ambiente
- validar payloads externos
- não confiar em input do usuário
- não confiar em permissões do frontend

## Schema validation
- usar schema explícito para entradas e saídas críticas
- preferir contratos reutilizáveis
- falha de validação deve gerar resposta segura e clara

## Autenticação
- definir como o usuário é autenticado
- proteger rotas privadas
- invalidar acesso quando contexto não for suficiente

## Autorização
- definir perfis e permissões
- validar autorização no backend
- registrar acessos sensíveis quando necessário

## Segredos
- nunca hardcodar segredo
- usar variáveis de ambiente
- não expor chaves em logs ou frontend

## Erros e exposição
- não retornar stack trace
- não expor detalhes internos
- evitar logs com dados sensíveis

## Upload e arquivos
- validar tipo
- validar tamanho
- validar destino
- evitar processamento inseguro

## Checklist mínimo de segurança
- valida entrada?
- valida permissão?
- protege segredo?
- trata erro com segurança?
- evita exposição desnecessária?
- respeita privacidade de dados?
