/* Banco de questões baseado nos dois materiais de estudo enviados. */
window.QUESTION_BANK = [
{
id:1,topic:"GQM",topicLabel:"GQM",question:"Entre as abordagens citadas no material para definir objetivos mensuráveis, qual utiliza a sigla GQM?",
options:[
{text:"Goal Question Metric",correct:true,feedback:"GQM corresponde a Goal Question Metric, uma das abordagens listadas no material."},
{text:"Quality Function Deployment",correct:false,feedback:"Quality Function Deployment também aparece na lista, mas não corresponde à sigla GQM."},
{text:"Practical Software Measurement",correct:false,feedback:"Practical Software Measurement é outra abordagem mencionada, não a expansão de GQM."},
{text:"Software Measurement Software Framework",correct:false,feedback:"O framework de medição é citado separadamente e não corresponde à sigla GQM."}
],
explanation:"O material identifica Goal Question Metric (GQM) como abordagem para definição de objetivos mensuráveis. Os arquivos não detalham as etapas de aplicação do GQM; por isso, a questão se limita à identificação da abordagem.",
source:"Texto colado (2) — questão sobre abordagens para definição de objetivos mensuráveis."
},
{
id:2,topic:"Introdução à Medição e Análise",topicLabel:"Medição e Análise",question:"Por que é importante estabelecer relações empíricas para um atributo que será medido?",
options:[
{text:"Porque ajudam a caracterizar atributos e ampliar sua compreensão antes de medições formais mais sofisticadas.",correct:true,feedback:"Essa é a justificativa apresentada: relações empíricas caracterizam atributos e aumentam a compreensão sobre eles."},
{text:"Porque substituem definitivamente qualquer medição formal.",correct:false,feedback:"O material indica que elas podem permitir medições formais mais sofisticadas no futuro, não substituí-las."},
{text:"Porque garantem que todos os atributos sejam medidos pela mesma unidade.",correct:false,feedback:"A justificativa está relacionada à caracterização e compreensão dos atributos, não à padronização de todas as unidades."},
{text:"Porque eliminam a necessidade de interpretar os dados coletados.",correct:false,feedback:"As relações empíricas ampliam a compreensão, mas não eliminam a necessidade de análise e interpretação."}
],
explanation:"As relações empíricas ajudam a caracterizar os atributos das entidades e aumentam a compreensão necessária para medições formais mais sofisticadas.",
source:"Texto colado (2) — questão sobre relações empíricas."
},
{
id:3,topic:"Introdução à Medição e Análise",topicLabel:"Medição e Análise",question:"Qual afirmação descreve melhor o papel da medição de software em projetos?",
options:[
{text:"Comunicar informações objetivas na organização e reduzir ambiguidades.",correct:true,feedback:"A medição é apresentada como meio de comunicar informações objetivas e reduzir ambiguidades em projetos complexos."},
{text:"Avaliar exclusivamente o desempenho individual dos desenvolvedores.",correct:false,feedback:"O material destaca comunicação e apoio ao gerenciamento organizacional, não avaliação exclusivamente individual."},
{text:"Adicionar uma tarefa sem valor significativo para o gerenciamento.",correct:false,feedback:"O material afirma que a medição é fundamental para a comunicação de informações objetivas."},
{text:"Ser necessária apenas em projetos de grande escala.",correct:false,feedback:"O material não restringe a utilidade da medição a projetos de grande escala."}
],
explanation:"A medição contribui para comunicar informações objetivas em toda a organização de software, reduzindo ambiguidades.",
source:"Texto colado (2) — questão sobre o papel da medição de software."
},
{
id:4,topic:"Introdução à Medição e Análise",topicLabel:"Medição e Análise",question:"Qual sequência representa os três níveis do modelo de medição apresentado nos materiais?",
options:[
{text:"Medidas base → medidas derivadas → indicadores.",correct:true,feedback:"A estrutura apresentada parte das medidas diretamente coletadas, passa pelos cálculos e chega à interpretação por indicadores."},
{text:"Indicadores → medidas base → medidas derivadas.",correct:false,feedback:"A sequência está invertida: dados base são coletados antes dos cálculos e da interpretação."},
{text:"Produto → processo → recursos.",correct:false,feedback:"Esses são tipos de métricas, não os três níveis do modelo de medição."},
{text:"Equipe → produto → empresa.",correct:false,feedback:"Essas são perspectivas de informação, não níveis de medidas."}
],
explanation:"Medidas base são coletadas diretamente; medidas derivadas são calculadas a partir de outras medidas; indicadores apoiam a interpretação e a tomada de decisão.",
source:"Texto colado.txt — questões sobre os níveis do modelo de medição."
},
{
id:5,topic:"Introdução à Medição e Análise",topicLabel:"Medição e Análise",question:"Uma contagem de defeitos registrada diretamente durante a inspeção de um artefato, antes de qualquer cálculo, é um exemplo de qual nível de medida?",
options:[
{text:"Medida base.",correct:true,feedback:"A contagem é observada e registrada diretamente, sem depender de cálculo com outras medidas."},
{text:"Medida derivada.",correct:false,feedback:"Uma medida derivada resulta de cálculo ou combinação de medidas, o que não ocorre na contagem direta descrita."},
{text:"Indicador.",correct:false,feedback:"Um indicador interpreta medidas para apoiar decisões; a contagem isolada é um dado direto."},
{text:"Meta de qualidade.",correct:false,feedback:"Uma meta estabelece um valor desejado, enquanto a situação descreve um dado observado."}
],
explanation:"Medidas base são dados obtidos diretamente por observação ou coleta. Medidas derivadas são calculadas, e indicadores interpretam informações.",
source:"Texto colado.txt — explicação dos três níveis de medição."
},
{
id:6,topic:"Introdução à Medição e Análise",topicLabel:"Medição e Análise",question:"Quais categorias de métricas de software são apresentadas como classificação básica no material?",
options:[
{text:"Métricas de produto, de processo e de recursos.",correct:true,feedback:"Essas três categorias são explicitamente apresentadas como classificação básica."},
{text:"Métricas de produto, custo e satisfação.",correct:false,feedback:"Custo e satisfação podem ser aspectos medidos, mas não formam a classificação básica citada."},
{text:"Métricas de requisitos, arquitetura e implementação.",correct:false,feedback:"Esses termos representam áreas ou artefatos do desenvolvimento, não as categorias listadas."},
{text:"Métricas de equipe, empresa e tecnologia.",correct:false,feedback:"Esses termos não correspondem às três categorias básicas de métricas indicadas."}
],
explanation:"O material apresenta métricas de produto, processo e recursos. Também observa que alguns autores incluem uma quarta categoria: métricas de projeto.",
source:"Texto colado (2) — questão sobre categorias de métricas."
},
{
id:7,topic:"Introdução à Medição e Análise",topicLabel:"Medição e Análise",question:"Qual é uma finalidade das métricas de processo, segundo o material?",
options:[
{text:"Apoiar melhorias no desenvolvimento e na manutenção do software.",correct:true,feedback:"O material afirma que métricas de processo podem ser usadas para melhorar o desenvolvimento e a manutenção."},
{text:"Medir exclusivamente tamanho, complexidade e performance do produto.",correct:false,feedback:"Esses atributos são apresentados como exemplos de métricas de produto."},
{text:"Calcular somente o custo de infraestrutura.",correct:false,feedback:"O material não restringe as métricas de processo ao custo de infraestrutura."},
{text:"Impedir alterações no processo de desenvolvimento.",correct:false,feedback:"Essa alternativa contraria a finalidade de melhoria indicada no material."}
],
explanation:"Métricas de processo ajudam a compreender e melhorar o processo de desenvolvimento e manutenção do software.",
source:"Texto colado (2) — questão sobre classificação de métricas."
},
{
id:8,topic:"Introdução à Medição e Análise",topicLabel:"Medição e Análise",question:"Quais atributos são citados como exemplos de aspectos avaliados por métricas de produto?",
options:[
{text:"Tamanho, complexidade e performance.",correct:true,feedback:"Esses três atributos aparecem diretamente como exemplos de métricas de produto."},
{text:"Motivação, comunicação e experiência individual dos desenvolvedores.",correct:false,feedback:"Esses aspectos não são os exemplos de métricas de produto apresentados no material."},
{text:"Orçamento, custo operacional e alocação de pessoas.",correct:false,feedback:"Esses aspectos se relacionam a recursos e custos, não aos exemplos solicitados de produto."},
{text:"Prazo de contratação, férias e disponibilidade da equipe.",correct:false,feedback:"Esses aspectos não correspondem aos atributos do produto citados."}
],
explanation:"Métricas de produto avaliam atributos do próprio software, como tamanho, complexidade e performance.",
source:"Texto colado (2) — questão sobre métricas de produto."
},
{
id:9,topic:"PSM",topicLabel:"PSM",question:"Quais são as cinco métricas fundamentais de Putnam listadas no material?",
options:[
{text:"Tamanho, produtividade, duração, esforço e confiabilidade.",correct:true,feedback:"Essa é a lista apresentada no material para as cinco métricas fundamentais de Putnam."},
{text:"Tamanho, satisfação do cliente, duração, custo e estabilidade dos requisitos.",correct:false,feedback:"A lista inclui satisfação e estabilidade dos requisitos, mas esses itens não correspondem às cinco métricas fundamentais indicadas."},
{text:"Esforço, densidade de defeitos, satisfação, custo e velocidade.",correct:false,feedback:"A alternativa mistura medidas e indicadores que não formam a lista de Putnam apresentada."},
{text:"Produtividade, complexidade funcional, custo, defeitos e satisfação.",correct:false,feedback:"Essa composição não corresponde às cinco métricas fundamentais listadas no material."}
],
explanation:"As cinco métricas fundamentais apresentadas são tamanho, produtividade, duração, esforço e confiabilidade. Satisfação do cliente não integra essa lista.",
source:"Texto colado.txt — questão sobre as cinco métricas fundamentais de Putnam."
},
{
id:10,topic:"PSM",topicLabel:"PSM",question:"Qual unidade é utilizada para expressar esforço em projetos de software?",
options:[
{text:"Pessoas-hora ou pessoas-mês.",correct:true,feedback:"Essas unidades representam o trabalho humano aplicado ao projeto."},
{text:"Linhas de código por versão.",correct:false,feedback:"Linhas de código são uma possível medida de tamanho, não uma unidade de esforço humano."},
{text:"Defeitos por funcionalidade.",correct:false,feedback:"Essa unidade pode representar densidade de defeitos, não esforço."},
{text:"Releases por cliente.",correct:false,feedback:"Essa unidade não mede a quantidade de trabalho humano empregada."}
],
explanation:"Esforço mede a quantidade de trabalho humano aplicada ao projeto, normalmente em pessoas-hora ou pessoas-mês.",
source:"Texto colado.txt — questão sobre a unidade de esforço."
},
{
id:11,topic:"PSM",topicLabel:"PSM",question:"Qual medida básica é apontada no material como referência para normalizar resultados e facilitar comparações entre projetos?",
options:[
{text:"Tamanho.",correct:true,feedback:"O material aponta tamanho como medida básica útil para normalização e comparação entre projetos."},
{text:"Satisfação do cliente.",correct:false,feedback:"Satisfação é apresentada como indicador subjetivo de qualidade, não como a medida básica indicada para normalização."},
{text:"Tema visual.",correct:false,feedback:"Tema visual é uma decisão de design, não uma medida básica de normalização de projetos."},
{text:"Número de integrantes da equipe, isoladamente.",correct:false,feedback:"A medida apresentada no material como referência para normalização é o tamanho do produto."}
],
explanation:"O tamanho pode servir como referência de normalização, permitindo comparar resultados relativos entre projetos.",
source:"Texto colado (2) — questões sobre normalização e comparação entre projetos."
},
{
id:12,topic:"PSM",topicLabel:"PSM",question:"Ao analisar o custo de um projeto de software, qual abordagem está de acordo com o material?",
options:[
{text:"Considerar salários, infraestrutura e custos operacionais, entre outros gastos relacionados.",correct:true,feedback:"A análise de custo é ampla e inclui diferentes componentes financeiros, não apenas salários."},
{text:"Contabilizar somente os salários dos desenvolvedores.",correct:false,feedback:"O material afirma que custo vai além dos salários dos desenvolvedores."},
{text:"Considerar apenas hardware e licenças de software.",correct:false,feedback:"A análise também pode abranger pessoas, infraestrutura e custos operacionais."},
{text:"Excluir custos operacionais da análise.",correct:false,feedback:"O material inclui explicitamente custos operacionais na análise."}
],
explanation:"A métrica de custo pode abranger salários de diferentes perfis, infraestrutura, ferramentas, treinamentos, administração e custos operacionais relacionados ao projeto.",
source:"Texto colado.txt e Texto colado (2) — questão sobre métrica de custo."
},
{
id:13,topic:"PSM",topicLabel:"PSM",question:"Qual conclusão sobre Linhas de Código (LoC) é compatível com o material?",
options:[
{text:"LoC pode ajudar na análise de tamanho, mas isoladamente não fornece uma visão completa da qualidade.",correct:true,feedback:"O material afirma que LoC é útil, mas não mede sozinha todos os aspectos da qualidade do software."},
{text:"LoC mede integralmente a qualidade, dispensando outras métricas.",correct:false,feedback:"Essa interpretação é apontada como limitada: qualidade exige considerar outros atributos e indicadores."},
{text:"LoC não pode ser usada como medida de tamanho.",correct:false,feedback:"O material reconhece LoC como métrica útil de tamanho."},
{text:"LoC mede diretamente a satisfação dos clientes.",correct:false,feedback:"Satisfação depende da percepção dos clientes e não é medida diretamente pela contagem de linhas de código."}
],
explanation:"LoC pode apoiar análises de tamanho e estimativas, mas qualidade também envolve defeitos, confiabilidade, manutenibilidade, satisfação e outros fatores.",
source:"Texto colado.txt e Texto colado (2) — questão sobre limitações de LoC."
},
{
id:14,topic:"PSM",topicLabel:"PSM",question:"Qual métrica é apresentada como indicador subjetivo de qualidade?",
options:[
{text:"Satisfação dos clientes.",correct:true,feedback:"A satisfação depende da percepção dos usuários e é indicada como medida subjetiva de qualidade."},
{text:"Esforço em pessoas-hora.",correct:false,feedback:"Esforço é quantificado pelo trabalho humano aplicado e não é o indicador subjetivo citado."},
{text:"Tempo médio entre falhas (MTBF).",correct:false,feedback:"MTBF é uma métrica temporal de confiabilidade, enquanto satisfação é o indicador subjetivo destacado."},
{text:"Número de defeitos em um artefato.",correct:false,feedback:"A contagem de defeitos é uma medida quantitativa, não o indicador subjetivo solicitado."}
],
explanation:"A satisfação dos clientes é subjetiva porque reflete a percepção dos usuários, podendo ser investigada por questionários, entrevistas e feedback.",
source:"Texto colado.txt e Texto colado (2) — questão sobre indicador subjetivo de qualidade."
},
{
id:15,topic:"PSM",topicLabel:"PSM",question:"Qual medida de qualidade permite acompanhar defeitos encontrados em diferentes artefatos e fases do projeto?",
options:[
{text:"Número de defeitos encontrados em um artefato específico.",correct:true,feedback:"A contagem de defeitos em um artefato permite acompanhar problemas em requisitos, casos de uso, código, módulos e testes."},
{text:"Quantidade de reuniões realizadas pela equipe.",correct:false,feedback:"Reuniões são atividades do processo, mas não representam diretamente a quantidade de defeitos nos artefatos."},
{text:"Número de funcionalidades solicitadas pelo cliente.",correct:false,feedback:"Funcionalidades solicitadas representam escopo, não defeitos encontrados."},
{text:"Tempo total de existência do projeto.",correct:false,feedback:"A duração do projeto não informa diretamente quantos defeitos foram identificados em um artefato."}
],
explanation:"A métrica de número de defeitos encontrados em um artefato pode ser aplicada a documentos de requisitos, casos de uso, código-fonte, módulos e casos de teste.",
source:"Texto colado.txt — questão sobre métricas de qualidade que medem defeitos."
},
{
id:16,topic:"PSM",topicLabel:"PSM",question:"No PSM/CID, o que o MTTR (Mean Time to Restore) mede?",
options:[
{text:"O tempo médio para restaurar as operações normais após uma falha.",correct:true,feedback:"MTTR mede o tempo médio necessário para o sistema voltar ao funcionamento normal após uma falha, incluindo detecção, diagnóstico e correção."},
{text:"O tempo entre a solicitação de uma tarefa e seu início.",correct:false,feedback:"Esse intervalo não corresponde ao MTTR descrito no material."},
{text:"O tempo ativo entre o início e a conclusão de uma tarefa.",correct:false,feedback:"O material associa esse intervalo ao Cycle Time, não ao MTTR."},
{text:"O tempo médio entre duas falhas consecutivas.",correct:false,feedback:"Essa descrição corresponde ao MTBF, enquanto MTTR trata da restauração após uma falha."}
],
explanation:"MTTR representa o tempo médio para restaurar o funcionamento normal após uma falha, considerando detecção, diagnóstico, correção e implantação da solução.",
source:"Texto colado.txt — questão sobre MTTR."
},
{
id:17,topic:"PSM",topicLabel:"PSM",question:"No CID Framework, qual intervalo é medido pelo Cycle Time?",
options:[
{text:"Do momento em que a atividade começa a ser trabalhada até sua conclusão.",correct:true,feedback:"Cycle Time mede o período em que a tarefa está efetivamente em progresso, do início do trabalho à conclusão."},
{text:"Da solicitação inicial até a entrega final, incluindo a espera antes do início.",correct:false,feedback:"Essa descrição corresponde ao Lead Time, que considera um intervalo mais amplo."},
{text:"Do início do projeto até sua aprovação financeira.",correct:false,feedback:"Esse intervalo não corresponde à definição de Cycle Time apresentada."},
{text:"Do registro de um defeito até sua descoberta pelo usuário.",correct:false,feedback:"Esse intervalo não é a definição de Cycle Time apresentada no material."}
],
explanation:"Cycle Time mede o tempo entre o início do trabalho ativo em uma tarefa e sua conclusão. Lead Time considera um intervalo mais amplo, desde a solicitação até a entrega.",
source:"Texto colado.txt — questão sobre Cycle Time e Lead Time."
},
{
id:18,topic:"PSM",topicLabel:"PSM",question:"Por que as necessidades de medição podem variar entre equipe, produto e empresa?",
options:[
{text:"Porque cada perspectiva tem prioridades e preocupações diferentes, que influenciam as medidas necessárias e sua agregação.",correct:true,feedback:"A equipe acompanha o trabalho operacional; o produto observa funcionalidades e qualidade; a empresa utiliza informações agregadas para decisões estratégicas."},
{text:"Porque cada perspectiva utiliza obrigatoriamente unidades incompatíveis.",correct:false,feedback:"O material relaciona as diferenças às prioridades e preocupações, não a uma incompatibilidade obrigatória de unidades."},
{text:"Porque somente a equipe precisa de indicadores.",correct:false,feedback:"Produto e empresa também utilizam informações de medição, com objetivos diferentes."},
{text:"Porque as medidas da equipe não podem ser agregadas para análise empresarial.",correct:false,feedback:"O material admite que as necessidades podem exigir medidas exclusivas ou agregadas."}
],
explanation:"Equipe, produto e empresa observam o trabalho sob perspectivas distintas: operacional, qualidade e entrega do produto, e tomada de decisão estratégica.",
source:"Texto colado.txt — questão sobre níveis equipe, produto e empresa."
}
];