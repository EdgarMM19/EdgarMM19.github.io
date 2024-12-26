import React from 'react';
import CustomTable from './components/CustomTable';
import Header from './components/Header';
import { academicData } from './data/academicData';
import { workData } from './data/workData';
import { papersData } from './data/papersData';
import './App.css';

const MainPage = () => (<div>
    <Header currentPage={'about'}/>
      <div class="content">
      <div class="row">
        <div class="column" style={{width: "65%"}}>
        <p>
          Welcome to my webpage! My name is Edgar, and I am a founding engineer at the YCombinator startup ProsperAI.
          </p>
          <p> Previously, I was a <a href="https://becarios.fundacionlacaixa.org/en/fellows">La Caixa Fellow 2023</a>, which allowed me to complete Part III (MASt in Pure Mathematics) at the University of Cambridge during the academic year 2023-2024.
        </p>
        <p>
          I graduated in Maths and Computer Science at <a href="https://www.upc.edu/en">UPC</a> (Universitat Politècnica de Catalunya) in Barcelona. My undergraduate studies were sponsored by <a href="https://cfis.upc.edu/en">CFIS-UPC</a>.
        </p>
        <p>
          During the academic year 2022-2023, I visited <a href="http://www.cs.umd.edu/~hajiagha/">Prof. MohammadTaghi</a> for my final degree project at the <a href="https://umd.edu/">University of Maryland</a>.
        </p>
        <p>
          Academically, I am interested in areas at the intersection of mathematics and computer science, including Game Theory, Combinatorics, Theory of Computation, and beyond. I also like the applications to social sciences and economics.
        </p>
        <p>
        But at the moment I want to hack and see what exciting products I can contribute to.
        </p>

      <p>
        I love solving problems (and creating them), teaching, sci-fi and mountain sports.
      </p>
        </div>
        <div class="column" style={{width: "35%"}}>
          <img src={('/resources/foto.jpg')} class="profile-image" alt="Myself"/>
        </div>
      </div>
      </div>
      <div className="content">
        <CustomTable name="Academic Experience" data={academicData}/>
      </div>
      <div className="content">
        <CustomTable name="Publications" data={papersData}/>
      </div>
      <div className="content">
        <CustomTable name="Work Experience" data={workData}/>
      </div>
    <div className="content">
      <h2> Others and achievements</h2>

<p> I was mentored by <a href="https://www.mit.edu/~alet/">Ferran Alet</a> in an introduction to Machine Learning research.</p>
<p> I participate in competitive programming competitions, achieving top 1000 in Google's Code Jam and 2 participations in SWERC-ICPC regionals, winning a bronze medal on it.</p>
<p> While in highschool I won a bronze and silver medal in Maths Spanish Olympiad, a silver in Informatics Spanish Olympiad and a bronze in Physics Spanish Olympiad.</p>
</div>

    </div>
    )

export default MainPage;