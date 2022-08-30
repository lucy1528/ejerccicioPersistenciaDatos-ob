let nombre = "Lucia"
let apellido = "Cerpa"
let info = { nombre, apellido }

sessionStorage.setItem("informacion", JSON.stringify(info))
sessionStorage.setItem("informacion", JSON.stringify(info))
localStorage.setItem("nombre", "Gor")
localStorage.setItem("info", JSON.stringify(info))

document.cookie = "nombre=Nombre; max-age=120" 

