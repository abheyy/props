import 'bulma/css/bulma.css';
import ProfileCard from './ProfieCard';
import AlexaImage from './alexa.png';
import CortanaImage from './cortana.png';
import SiriImage from './siri.png';


function App(){
    return(
        <div>

            <section className="hero is-primary">
  <div className="hero-body">
    <p className="title">
    Personal Assistant
    </p>
  </div>
</section>


            <div className="container">
                <section className="section">
                    <div className="columns">
                        <div className="column is -4">
                        <ProfileCard title="Alexa" handle="@alexa12" image={AlexaImage} 
                        description="Alexa is madeby Amazon" />
                        </div>

                        <div className="column is -4">
                        <ProfileCard title="Cortana" handle="@alexa45" image={CortanaImage} 
                        description="Cortana is madeby Microsoft"/>
                        </div>
                            
                        <div className="column is -4">
                        <ProfileCard title="Siri" handle="@siri23" image={SiriImage}
                        description="Siri is madeby Apple"/>

                        </div>
                    </div>
                </section>
            </div>
             
            
        </div>
    );

}

export default App;
