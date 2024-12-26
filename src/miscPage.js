import React from 'react';
import Header from './components/Header';
import './App.css';

const MiscPage = () => (
    <div>
    <Header currentPage={'misc'}/>

        <div className="content">
            <h2>Problem setting</h2>
            <p>
                I organized the annual math problem contest in my University in 2022. Some nice problems can be found (or at least I like those!) <a href="https://maratofme.gitlab.io/">Here</a> (in Catalan)
            </p>
            <p>
                Some (easy) Competitive Programming problems created by me can be found:
                <ul>
                    <li>Papalindromos and Torres de Colores (in Spanish) <a href="https://www.hackerrank.com/segundo-concurso-clasificatorio-oie-2021">Here</a> (<a href="https://olimpiada-informatica.org/sites/default/files/OIE_2021_Soluciones_Clasificatorio_2.pdf">Solutions</a>)</li>
                    <li>Interesting score systems (contest created with some friends!) <a href="https://codeforces.com/gym/103098">Here</a></li>
                    <li>Teatro and Reescritura <a href="https://codeforces.com/gym/103806">Here</a> and <a href="https://codeforces.com/gym/103808">Here</a>.</li>
                </ul>
            </p>
            <p>
                I also created a bunch of problems for the programming-learning and contest repository <a href="https://jutge.org/">jutge.org</a>. A list of those can be found <a href="jutge.html">here</a>.
            </p>

            <h2>Teaching</h2>
            <p>
                A presentation for an introduction class in (Combinatorial) Game theory for Highschool students (in Catalan) <a href="resources/TeoriaDeJocs1.pdf">Here</a>. An introduction to (Algorithmic) Game theory (based on previous work by Ivan Geffner) <a href="resources/clase_alg_gt.pdf">here</a>.
            </p>
            <p>
                I taught two 4-hour courses to undergrads in CFIS programme. One about introduction to logic, Gödel's theorem and Turing machines (slides in Catalan <a href="resources/SeminariLogicaDiapos.pdf">here</a> and <a href="resources/SeminariLogicaDiapos2.pdf">here</a>). The other one about Quantum Computing (without slides :( ).
            </p>
            <p>
                I wrote some tutorials for the Spanish Olympiad of Informatics (in Spanish): <a href="https://aprende.olimpiada-informatica.org/algoritmia-componentes-conexas-bicoloracion">Componentes conexas</a>, <a href="https://aprende.olimpiada-informatica.org/dfs-tree">DFS tree</a> and <a href="https://aprende.olimpiada-informatica.org/algoritmia-scc-sat">SCC</a>.
            </p>

            <h2>Random</h2>
            <p>
                I gave a speech in my CFIS graduation, that can be seen <a href="https://cfis.upc.edu/ca/el-centre/activitats/acte-de-graduacio/copy_of_videos-2022" target="_blank" rel="noopener noreferrer">here</a>.
            </p>
            <p>
                Some cool problems on abstract algebra (course by Josep Alvarez) with solution: <a href="resources/AA2.pdf">Here</a>
            </p>
            <p>
                What every freshman in a maths degree should know? <a href="resources/Things_to_know.pdf">Easy tricks</a> (in Catalan).
            </p>
            <p>
                Very little <a href="https://javierlcontreras.github.io/hemeroteque/" target="_blank" rel="noopener noreferrer">project</a> analyzing words said in Spanish news with my friend Javier.
            </p>
        </div>
    </div>
);

export default MiscPage;
