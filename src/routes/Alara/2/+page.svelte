<script>
    export let data;
    import { supabase } from "$lib/supabaseClient";
    import  {browser} from '$app/environment'
    
    let index_quiz = data.domande[0].index_quiz;
    let rispostaData = "NULL";
    let rispostaCorretta = data.domande[index_quiz - 1].Risposta_corretta;

    function selezionaRisposta(event) {
        rispostaData = event.target.id;
    }

    let risultato = data.domande[index_quiz - 1].risultato_alara;

    
    const increaseIndex = () => {
        index_quiz++;
        risultato = data.domande[index_quiz - 1].risultato_alara;

     
    };

    const decreaseIndex = () => {
        if (index_quiz > 1) {
            index_quiz--;
        }
       
        risultato = data.domande[index_quiz - 1].risultato_alara;
       
    };
</script>

{#if !browser}
<div class="load_container">
<div class="lds-dual-ring"></div>
</div>
{:else}
<br />
<div class="container">
{#each data.domande as domanda}
    {#if domanda.histo_id == index_quiz}
        
            <table class="table table-hover">
                <tbody>
                    <tr
                        ><th
                            ><h3>
                                <b>{index_quiz + ") "} {domanda.Domanda_quiz}</b
                                >
                            </h3></th
                        ></tr
                    >

                    <tr
                        ><td id={`Risposta_${risultato}`}
                            ><label for="A"
                                ><input
                                    on:click={selezionaRisposta}
                                    type="radio"
                                    id="A"
                                    name="answer"
                                /><b> a)</b>
                                <div class="labelText">
                                    {domanda.Risposta_1}
                                </div></label
                            ></td
                        ></tr
                    >
                    <tr
                        ><td id={`Risposta_${risultato}`}
                            ><label for="B"
                                ><input
                                    on:click={selezionaRisposta}
                                    type="radio"
                                    id="B"
                                    name="answer"
                                /><b> b)</b>
                                <div class="labelText">
                                    {domanda.Risposta_2}
                                </div></label
                            ></td
                        ></tr
                    >
                    <tr
                        ><td id={`Risposta_${risultato}`}
                            ><label for="C"
                                ><input
                                    on:click={selezionaRisposta}
                                    type="radio"
                                    id="C"
                                    name="answer"
                                /><b> c)</b>
                                <div class="labelText">
                                    {domanda.Risposta_3}
                                </div></label
                            ></td
                        ></tr
                    >
                    <tr
                        ><td id={`Risposta_${risultato}`}
                            ><label for="D"
                                ><input
                                    on:click={selezionaRisposta}
                                    type="radio"
                                    id="D"
                                    name="answer"
                                /><b> d)</b>
                                <div class="labelText">
                                    {domanda.Risposta_4}
                                </div></label
                            ></td
                        ></tr
                    >
                    <tr
                        ><td id={`Risposta_${risultato}`}
                            ><label for="E"
                                ><input
                                    on:click={selezionaRisposta}
                                    type="radio"
                                    id="E"
                                    name="answer"
                                /><b> e) </b>
                                <div class="labelText">
                                    {domanda.Risposta_5}
                                </div></label
                            ></td
                        ></tr
                    >
                </tbody>
            </table>
        

        <br />
        <button
            style="margin-left:20px"
            class="btn variant-filled-primary"
            id={`submit_${risultato}`}
            on:click={submit}>Rispondi</button
        >

        {@const checkAnswer = async () => {
            let message;
            let risultato; // Declare risultato variable here
        
            if (rispostaData == data.domande[index_quiz-1].Risposta_corretta) {
                risultato = "esatta";
            } else {
                risultato = "errata";
            }
            console.log(risultato, data.domande[index_quiz - 1].Risposta_corretta, rispostaData)
            return risultato;
            
        }}
        
        {@const insertData = async () => {
            // Call checkAnswer function properly and wait for its completion
            const risultato = await checkAnswer();
            
            const { data, error } = await supabase
                .from("domande")
                .upsert(
                    [
                        {
                            histo_id: index_quiz,
                            risultato_alara: risultato,
                            risposta_alara: rispostaData,
                        },
                    ],
                    { onConflict: ["histo_id"] },
                )
                .select();  
        }}
        
        {@const updateIndex = async () => {
            const { data, error, status } = await supabase
                .from('domande')
                .upsert([{ 
                    histo_id: 1,
                    index_quiz: index_quiz 
                }])
                .match({ index_quiz: 1 })
                .select();       
        }}
        
        {@const submit = async () => { // Make the submit function async
        
            await insertData(); // Await insertData to ensure completion before proceeding
            updateIndex();
            location.reload();
        }}
        <button class="btn variant-filled-primary" id="dark-primary" on:click={decreaseIndex}
            >←</button
        >
        <button class="btn variant-filled-primary" id="dark-primary" on:click={increaseIndex}
            >→</button
        >

        <br /> <br />
        <div class="AnswerMessage" id='Soluzione_{risultato}'>La risposta corretta era la <b>{data.domande[index_quiz-1].Risposta_corretta}</b>, tu hai selezionato la <b>{data.domande[index_quiz-1].risposta_alara}</b><br><hr>{@html data.domande[index_quiz-1].html_content}</div>
    {/if}
{/each}

<br />



<div class="buttons">
    {#each data.domande as domanda}
        {#if domanda.histo_id <= 150 && domanda.histo_id > 100 } 
            <button
                class="btn variant-filled-soft"
                id={`Index_Number_${data.domande[domanda.histo_id-1].risultato_alara}`}
                name={domanda.histo_id}
                on:click={chooseIndex}>{domanda.histo_id}</button
            >
            {@const chooseIndex = () => {
                {
                    index_quiz = domanda.histo_id;
                }
              
                risultato = data.domande[index_quiz - 1].risultato_alara;
            }}
        {/if}
    {/each}
</div>
</div>

{/if}

<style>
    @import "tailwindcss/base";
    @import "tailwindcss/components";
    @import "tailwindcss/utilities";

    .buttons {
        display: flex;
        flex-wrap: wrap;
    }

    .indexButton {
        width: 20%;
    }

    .container {
        align-items: center;
        justify-content: center;
        margin-right: auto;
        margin-left:auto;
        width:1250px;
        max-width: 95%;
    }

    table {
        
        border: 1px solid black;
    }

    #Risposta_esatta {
        @apply bg-success-900;
        pointer-events: none;
    }

    #Risposta_errata {
        @apply bg-primary-800;
        pointer-events: none;
    }

    input[type="radio"] {
        accent-color: #ff0000;
    }

    td {
        @apply bg-secondary-600;
        border: 1px solid black;
        padding: 2px !important;
        width: 90%;
    }

    td:hover {
        @apply bg-secondary-700;
    }

    tr {
        padding: 0px;
        width: 100%;
    }

    th {
        @apply bg-secondary-900;
        text-align: left;
        border: 1px solid black;
        padding: 20px;
        font-size: larger;
    }

    label {
        padding-left: 20px;
        cursor: pointer;
        height: 100%;
        padding-top: 14px;
        padding-bottom: 14px;
        padding-right: 10px;
        padding-left: 10px;
        height: auto;
        display: flex;
        align-items: center;
        font-size: large;
    }
    label > b {
        margin-right: 10px;
    }

    .labelText {
        word-wrap: break-word; /* Allow words to break if they exceed the width */
        white-space: pre-wrap; /* Preserve white-space and allow wrapping */
    }

    input {
        margin-right: 20px;
    }

    .radio {
        background-color: #007bff; /* Change the background color when checked */
        border-color: #007bff;
    }

    #dark-primary {
        @apply bg-primary-900;
        font-size: larger;
    }

    #submit_null {
        @apply bg-primary-900;
    }

    #submit_esatta {
        @apply bg-primary-900;
        pointer-events: none;
    }
    #submit_errata {
        @apply bg-primary-900;
        pointer-events: none;
    }

   

    #unclickable:clicked {
        @apply bg-primary-900;
        pointer-events: none;
        transform: scale(1) !important;
    }

    #Index_Number_null {
        @apply bg-secondary-700;
        border-radius: 10px;
        margin: 5px;
        width: 30px;
    }

    #Index_Number_esatta {
        @apply bg-success-900;
        border-radius: 10px;
        margin: 5px;
        width: 30px;
    }

    #Index_Number_errata {
        @apply bg-primary-900;
        border-radius: 10px;
        margin: 5px;
        width: 30px;
    }



    #highlight-green {
        @apply bg-success-900;
        pointer-events: none;
    }

    #highlight-red {
        @apply bg-primary-700;
    }

    #Soluzione_null{
        display: none !important;
    }

    .AnswerMessage {
        border: solid 2px rgb(0, 0, 0);
        border-collapse: collapse;
        min-height: 100px;
        margin-left: auto;
        margin-right: auto;
        text-align: left;
        padding: 10px;
        font-family: Arial, Helvetica, sans-serif;
        font-size: medium;
        border-radius: 20px;
        background-color: #ffffff; /* Background color */
        color: #191919; /* Text color */
        box-shadow: 5px 5px 10px rgba(0, 0, 0, 0.4); /* Drop shadow */
        max-width: 90%;
        list-style-type: circle !important; /* Remove default bullet points */
        display: block !important; /* Display as block elements */
        margin: 0 !important; /* Remove default margin */
        padding: 10px !important; /* Remove default padding */
        min-width: 80%;
    }

    
.lds-dual-ring,
.lds-dual-ring:after {
  box-sizing: border-box;
}
.lds-dual-ring {
  display: inline-block;
  width: 80px;
  height: 80px;
  margin-top: 100px;
}
.lds-dual-ring:after {
  content: " ";
  display: block;
  width: 64px;
  height: 64px;
  margin: 8px;
  border-radius: 50%;
  border: 6.4px solid currentColor;
  border-color: currentColor transparent currentColor transparent;
  animation: lds-dual-ring 1.2s linear infinite;
}
@keyframes lds-dual-ring {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}

.load_container{
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 0px;
}

    
</style>
