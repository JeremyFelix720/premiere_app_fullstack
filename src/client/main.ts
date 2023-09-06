const app = document.querySelector('#app') as HTMLDivElement

const nameField = document.createElement('input') as HTMLInputElement
nameField.setAttribute("id", "name_field")
nameField.setAttribute("type", "text")
app.appendChild(nameField)

const sendButton = document.createElement('button') as HTMLButtonElement
sendButton.setAttribute("id", "send_button")
sendButton.innerText = 'Envoyer'
app.appendChild(sendButton)

let helloResult = document.createElement('p') as HTMLParagraphElement
helloResult.setAttribute("class", "result")
app.appendChild(helloResult)

let countHellosResult = document.createElement('p') as HTMLParagraphElement
countHellosResult.setAttribute("class", "result")
app.appendChild(countHellosResult)

sendButton.addEventListener("click", async () => {
  const resHello = await fetch("/hello/" + nameField?.value) // j'envoi la donnée (argument) du côté client (ici) vers le côté serveur

  const resHellos = await fetch("/hellos/" + nameField?.value) // j'envoi la donnée (argument) du côté client (ici) vers le côté serveur

  const helloMessage = await resHello.text() // contient le texte qui se trouve dans le "res.send(...)" du côté serveur
  const countHellosMessage = await resHellos.text() // contient le texte qui se trouve dans le "res.send(...)" du côté serveur

  helloResult.innerText = helloMessage // je rajoute le message dans le DOM

  countHellosResult.innerText = countHellosMessage // je rajoute le message dans le DOM
})



// envoyer une info du serveur à client : res.send

// envoyer une info du client au serveur : fetch + param