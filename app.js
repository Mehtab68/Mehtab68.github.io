const API_KEY = ''//add api key here
const submitBtn = document.querySelector('#SubmitBtn') //submit button for chat
const output = document.querySelector('#output') //output message
const input = document.querySelector('#input') //input text
const history = document.querySelector('#history') //message history
const clearBtn = document.querySelector('#clearBtn') //clear button

async function getMessage(){
    console.log('getMessage() called')
    const options = {
        method: 'POST',
        headers: {
            'Authorization': `Bearer ${API_KEY}`,
            'Content-Type': 'application/json'
        },
        body : JSON.stringify({
            model: "gpt-3.5-turbo",
            messages:[{role:"user", content: input.value}],
            max_tokens: 100,
        })
    }

    try{
        const reponse = await fetch('https://api.openai.com/v1/chat/completions', options)
        const data = await response.json()
        console.log(data)
        output.textContent = data.choices[0].message.content
        if (data.choices[0].message.content){
            const pElement = document.createElement('p')
            pElement.textContent = inputElement.value
            history.append(pElement)
        }
    } catch (error){
        console.error(error);
    }
}


submitBtn.addEventListener('click', getMessage)

function clearInput(){
    input.value = ''
}

clearBtn.addEventListener('click', clearInput)