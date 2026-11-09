# Simulado Interativo — Qualidade de Software

Aplicação estática de revisão dos conteúdos **PSM**, **GQM** e **Introdução à Medição e Análise**, preparada para publicação no GitHub Pages.

## Banco de questões

O simulado agora contém **83 questões de múltipla escolha**: 18 questões iniciais e 65 questões novas elaboradas após a análise dos materiais de estudo incluídos em `P2.zip`.

As 65 novas questões ampliam a cobertura com foco em conceitos que não estavam suficientemente representados no banco inicial:

| Bloco de novas questões | Quantidade | Conteúdos |
|---|---:|---|
| GQM | 21 | Objetivos, níveis conceitual/operacional/quantitativo, fases, equipe, abstraction sheets, hipóteses, perguntas, métricas, planos, coleta e interpretação. |
| PSM e CID | 26 | Modelo de informação, medidas e indicadores, critérios, tipos de análise, categorias de informação, seleção de medidas, Story Points, fluxo, testes, defeitos, MTTR/MTTD, releases, velocidade, valor e dívida técnica. |
| Introdução à Medição e Análise | 18 | Entidades e atributos, relações empíricas, teoria representacional, escalas nominal, ordinal, intervalar e de razão, transformações admissíveis e significado de medidas. |

As novas questões seguem o padrão de **quatro alternativas, uma resposta correta e explicação**. O aplicativo embaralha questões e alternativas, corrige a resposta, apresenta feedback, acompanha o resultado por assunto e permite revisar erros. Há questões conceituais e questões de aplicação/cálculo, por exemplo, cálculo de razão de defeitos escapados, frequência de releases e velocidade média.

## Recursos do aplicativo

- 83 questões de múltipla escolha;
- quatro alternativas por questão;
- correção e justificativa após cada resposta;
- ordem de questões e alternativas embaralhada;
- acompanhamento de acertos, erros e progresso;
- resultado por assunto;
- revisão das questões erradas;
- armazenamento local do melhor aproveitamento no navegador;
- layout responsivo para computador e celular;
- sem backend ou dependências para instalação.

## Como executar localmente

Abra `index.html` no navegador. Como o projeto utiliza HTML, CSS e JavaScript no cliente, não é necessário instalar dependências.

## Como publicar pelo GitHub Pages

1. Acesse **Settings → Pages**.
2. Em **Build and deployment**, selecione **Deploy from a branch**.
3. Escolha a branch `main` e a pasta `/(root)`, depois clique em **Save**.
4. Aguarde a publicação e use o endereço exibido na seção GitHub Pages.

O arquivo `index.html` está na raiz e carrega os arquivos JavaScript na ordem necessária: banco inicial, banco adicional e lógica do aplicativo.

## Organização dos arquivos

- `index.html`: estrutura da interface;
- `style.css`: estilos e responsividade;
- `questions.js`: banco inicial de 18 questões;
- `questions-extra.js`: 65 novas questões;
- `app.js`: lógica do simulado, correção, pontuação e revisão;
- `.nojekyll`: desabilita o processamento Jekyll;
- `README.md`: esta documentação.

## Materiais utilizados

As novas questões foram elaboradas a partir do conjunto de PDFs de `P2.zip`, incluindo:

- AULA 08 QSW1 — GQM;
- AULA 09 QSW1 — PSM;
- PSM CID Measurement Framework — Partes 1, 2 e 3;
- McGarry — capítulos 1 e 2;
- Fenton — *Why Measurement?* e *The Basics of Measurement* (capítulos sobre fundamentos, tipos de medição e escalas).

A seleção prioriza o conteúdo dos materiais fornecidos. Questões sobre escalas de medição preservam a distinção entre classificação, ordenação, intervalos iguais e zero significativo. Questões de PSM/CID distinguem medidas base, medidas derivadas, indicadores e critérios de decisão. Questões de GQM abrangem as fases e seus artefatos, sem reduzir a abordagem apenas à expansão da sigla.

## Observações

- O banco inicial foi mantido e complementado, não substituído.
- As novas questões utilizam quatro alternativas e uma única resposta correta.
- As explicações e referências de origem ficam associadas a cada questão no arquivo JavaScript.
- A seleção de medidas e indicadores deve sempre considerar as necessidades de informação e o contexto do projeto; o simulado não trata uma métrica isolada como medida universal de qualidade.

## Uso

Material educacional para estudo. Consulte os materiais oficiais da disciplina para aprofundar os conceitos e confirme os critérios específicos adotados pela turma antes de uma avaliação formal.
