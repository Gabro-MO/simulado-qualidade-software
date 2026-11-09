# Simulado Interativo — Qualidade de Software

Aplicação estática para revisão de **PSM**, **GQM** e **Introdução à Medição e Análise**, preparada para publicação no GitHub Pages.

## Recursos

- 18 questões de múltipla escolha;
- ordem das questões e alternativas embaralhada a cada tentativa;
- correção após confirmar a resposta;
- justificativa da questão e da alternativa escolhida;
- acompanhamento de acertos, erros e progresso;
- resultado por assunto;
- revisão das questões erradas;
- armazenamento local do melhor aproveitamento no navegador;
- layout responsivo para computador e celular;
- sem dependências de backend ou instalação de pacotes.

## Como executar localmente

Abra `index.html` no navegador. Como o projeto usa apenas HTML, CSS e JavaScript no cliente, não é necessário instalar dependências.

## Como publicar pelo GitHub Pages

1. Acesse **Settings → Pages**.
2. Em **Build and deployment**, selecione **Deploy from a branch**.
3. Escolha a branch `main` e a pasta `/(root)`, depois clique em **Save**.
4. Aguarde a publicação e use o endereço exibido na seção GitHub Pages.

O arquivo `index.html` está na raiz, pronto para ser usado como página inicial.

## Organização

- `index.html`: estrutura da interface;
- `style.css`: estilos e responsividade;
- `questions.js`: banco de questões e justificativas;
- `app.js`: lógica do simulado, correção e resultados.

## Escopo e fidelidade ao material

As questões foram selecionadas ou adaptadas a partir dos dois arquivos de estudo enviados. Os temas cobertos incluem medidas base, derivadas e indicadores; métricas de produto, processo e recursos; métricas de Putnam; esforço, tamanho, produtividade e custo; LoC; satisfação do cliente; defeitos; MTTR; Cycle Time; e perspectivas de equipe, produto e empresa.

**Limitação de GQM:** o material fornecido cita Goal Question Metric como abordagem para definição de objetivos mensuráveis, mas não apresenta detalhes suficientes sobre suas etapas ou aplicação. Por isso, o simulado cobra somente a identificação da abordagem e sinaliza essa limitação, em vez de inventar conteúdo adicional.

Alguns campos de resposta preenchidos no segundo arquivo contradizem explicações consistentes do próprio conjunto. Para evitar propagar esses erros, o banco utiliza a resposta acompanhada de explicação coerente com o conteúdo dos materiais, por exemplo, esforço como uma das métricas fundamentais de Putnam.

## Licença e uso

Material educacional para estudo. Revise as questões e o gabarito com as referências oficiais da disciplina antes de utilizar em uma avaliação formal.
