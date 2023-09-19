import React from "react";

class SmileyCard extends React.Component {
    constructor () {
        super();

        this.state = {
            smileys: [
                { id: 1, name: '😃', votes: 0 },
                { id: 2, name: '😊', votes: 0 },
                { id: 3, name: '😁', votes: 0 },
                { id: 4, name: '😄', votes: 0 },
            ],
            
            selectedSmiley: null,
        };
    }

    handleVote = (id) => {
        this.setState((prevState) => ({
          smileys: prevState.smileys.map((smiley) =>
            smiley.id === id ? { ...smiley, votes: smiley.votes + 1 } : smiley
          ),
        }));
    };

    showResults = () => {
        const { smileys } = this.state;
        const maxVotes = Math.max(...smileys.map((smiley) => smiley.votes));
        const leaders = smileys.filter((smiley) => smiley.votes === maxVotes);
    
        if (leaders.length === 0) {
          this.setState({ selectedSmiley: "Поки що у всіх однаково" });
        } else if (leaders.length === 1) {
          this.setState({ selectedSmiley: leaders[0].name });
        } else {
          const leaderNames = leaders.map((leader) => leader.name).join(', ');
          this.setState({ selectedSmiley: `Вказано ${leaders.length} лідерів: ${leaderNames}` });
        }
    };

    render () {
        
        const {smileys, selectedSmiley} = this.state;

        return (
            <>
                
                <div className="main__smileys smileys">
                
                <h1 className='smileys__header'>Виберіть Ваш смайлик</h1> 
                
                {smileys.map((smiley) => (
                                
                                <div className="smileys__smile" key={smiley.id}>
                                    
                                    <div className="smileys__name">
                                        {smiley.name}
                                    </div>
                                    
                                    <button className="smileys__btn" onClick={() => this.handleVote(smiley.id)}>Обираю</button>
                                    
                                    <div className="smileys__votes">
                                        Набрано голосів: {smiley.votes}
                                    </div>
                                    
                                </div>
                            ))}
            
                
                
                <button className='smileys__showResult' onClick={this.showResults}>Показати результати</button>
            
                {selectedSmiley && (
                    <div className="smileys__result">
                        Смайлик з найбільшою кількістю голосів: {selectedSmiley}
                    </div>
            )}

                </div>

            
            </>
        );
    }
}

export default SmileyCard;