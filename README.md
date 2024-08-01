EXPO: framework que aporta dependencias. Routing, controladores de perifericos y barras del celular y otras constantes
    expo-linking: para enlazar app con otras app. Te permite abrir la app desde otras app (por ejemplo "quieres abrir la app")
    expo-constants
    expo-router: rutas por carpetas (similar next js) en carpeta app

Para tener la carpeta "app" dentro de src agregue las lineas siguientes en app.json: 

"expo": {
    "plugins":[
      [
        "expo-router",
        {
          "root":"src/app"
        }
      ]
    ],


DENTRO DE CARPETA APP:
    PRIMERO BUSCA Y LEE EL ARCHIVO __LAYOUT . 
    __layout tiene hijo un componente Slot ----> busca el archivo index.js en la carpeta app
