[![Review Assignment Due Date](https://classroom.github.com/assets/deadline-readme-button-22041afd0340ce965d47ae6ef1cefeee28c7c493a6346c4f15d667ab976d596c.svg)](https://classroom.github.com/a/Nr2sQ6o_)
[![Open in Visual Studio Code](https://classroom.github.com/assets/open-in-vscode-2e0aaae1b6195c2367325f4f02e2d04e9abb55f0b24a779b69b11b9e10269abc.svg)](https://classroom.github.com/online_ide?assignment_repo_id=20037875&assignment_repo_type=AssignmentRepo)
# 📚 Examen Final - Sistema de Subastas
---
# Parte Backend

## 🎯 Objetivo

Desarrollar un sistema de subastas en Java 17 y Spring Boot donde los usuarios puedan participar en distintas subastas realizando apuestas. No se almacena un historial de apuestas: **la subasta solo mantiene al usuario con la mayor apuesta actual** y el monto apostado.

---

## 🧱 Entidades principales

### 🧍 Usuario (`User`)
Representa a un participante del sistema.

Atributos disponibles:
- `id`: Identificador único.
- `firstName`: Nombre.
- `lastName`: Apellido.
- `email`: Correo electrónico.
- `balance`: Dinero disponible para apostar.
- `isActive`: Indica si el usuario está activo (true) o no (false).

---

### 🏷️ Subasta (`Auction`)
Representa un evento de subasta con un título, descripción, y fechas de inicio y fin.

Atributos gestionados:
- `id`: Identificador único.
- `title`: Título de la subasta.
- `description`: Descripción del ítem.
- `startDate`: Fecha y hora de inicio.
- `endDate`: Fecha y hora de cierre.
- `maxAmount`: Monto máximo apostado hasta ahora.
- `highestBidder` (relacion): Usuario que hizo la mayor apuesta.

---

## ⚙️ Funcionalidades requeridas

### ✅ 1. Crear una subasta ( 10 puntos )

🔧 **Nota:** Esta funcionalidad debe ser implementada correctamente. Asegurate de completar cualquier parte pendiente del código para que el endpoint funcione como se espera.

**Endpoint:**  
`POST /api/v1/auctions`

**Request Body (AuctionRequestDTO):**
```json
{
  "title": "Subasta de notebook",
  "description": "Notebook Lenovo i7",
  "start_date": "2025-08-01T10:00:00",
  "end_date": "2025-08-10T18:00:00",
  "max_amount": 0
}
```

**Validaciones esperadas:**
- El campo `title` y `description` no deben ser nulos ni estar en blanco.
- Los campos `startDate` y `endDate` deben corresponder a fechas futuras. No se permiten fechas anteriores a la fecha y hora actual.
- La fecha `startDate` debe ser anterior a la fecha `endDate`.
- El campo `maxAmount` debe ser un valor mayor o igual a 0 (no se permiten valores negativos).

⚠️ **Advertencia:** Las validaciones deben devolver errores **4XX**, no **5XX**.


### ✅ 2. Ver una subasta por ID ( 5 puntos )

🔧 **Nota:** Esta funcionalidad debe ser implementada correctamente. Asegurate de completar cualquier parte pendiente del código para que el endpoint funcione como se espera.

**Endpoint:**  
`GET /api/v1/auctions/{id}`

**Parámetros:**
- `id`: ID de la subasta

---

### ✅ 3. Apostar en una subasta ( 40 puntos )

🔧 **Nota:** Esta funcionalidad debe ser implementada correctamente. Asegurate de completar cualquier parte pendiente del código para que el endpoint funcione como se espera.

**Endpoint:**  
`PUT /api/v1/auctions/{id}/bid`

**Parámetros:**
- `id`: ID de la subasta a la que se quiere apostar

**Request Body (BidDTO):**
```json
{
  "user_id": 1,
  "amount": 200.00
}
```

**Validaciones esperadas:**
- La subasta debe estar activa (fecha actual entre `startDate` y `endDate`).
- El usuario con la mayor apuesta actual no puede apostar otra vez.
- El usuario debe tener suficiente balance.
- El monto debe ser mayor al `maxAmount` actual de la subasta.

⚠️ **Advertencia:** Las validaciones deben devolver errores **4XX**, no **5XX**.

**Acciones esperadas:**
- Devolver la plata al anterior `highestBidder`.
- Se actualiza el `maxAmount` de la subasta.
- Se asigna como `highestBidder` al usuario que realizó la apuesta.
- Se descuenta el monto del balance del usuario.

---

### ✅ 4. Listar usuarios ( 5 puntos )

🔧 **Nota:** Esta funcionalidad debe ser implementada correctamente. Asegurate de completar cualquier parte pendiente del código para que el endpoint funcione como se espera.

**Endpoint:**  
`GET /api/v1/users`

**Descripción:**  
Devuelve todos los usuarios registrados con sus datos y balance.

---
### 📌 Importante sobre firmas y formato
Es fundamental mantener las firmas definidas para los métodos, clases y endpoints exactamente como se especificaron en el enunciado. Las entidades Auction y User tienen atributos con nombres en camelCase en el backend, pero en los DTOs que viajan por API se utiliza snake_case.


Esto debe respetarse en las clases DTOs y en los cuerpos de request/response. Cambiar las firmas o el formato puede invalidar el parcial.
---
## 🧪 Evaluación y puntajes

| Tema Evaluado               | Puntaje     |
|-----------------------------|-------------|
| Pujar en una subasta        | 40 pts      |
| Testing 80% (Servicios)     | 40 pts      |
| Crear una subasta           | 10 pts      |
| Obtener una subasta por id  | 5 pts       |
| Obtener todos los usuarios  | 5 pts       |
| **Total**                   | **100 pts** |

### 📌 Importante sobre testing

Se requiere al menos **una prueba por cada funcionalidad principal**, ya sea a nivel de **controlador (controller)** y de **servicio (service)**.

⚠️ **Advertencia:** Si no se cumple con este requisito mínimo de testing, **el examen no será corregido**.

### 📌 Importante sobre validaciones

⚠️ **Advertencia:** Todas las validaciones deben generar **errores de cliente (códigos 4XX)**.**No se considerará correcto devolver errores de servidor (códigos 5XX)** como respuesta a una validación fallida.

🔧 Revisar la clase **ControllerExceptionHandler** y **modificarla si es necesario** para asegurar el manejo correcto de errores de validación (4XX).

---
# Parte Frontend

## 🎯 Objetivo

Desarrollar un sistema completo de subastas utilizando **Angular 19**, donde los usuarios puedan crear subastas y participar en ellas realizando apuestas (pujas). El sistema deberá comunicarse con una API backend ya implementada, siguiendo buenas prácticas de arquitectura modular, servicios, formularios y manejo de rutas.

---

## 🧱 Estructura del Proyecto

```
src/
├── app/
│   ├── modules/
│   │   ├── user/
│   │   │   ├── models/
│   │   │   │   └── user.model.ts         # Modelo e interfaz de Usuario
│   │   │   └── services/
│   │   │       └── user.service.ts       # Servicio para gestión de usuarios
│   │   └── auction/
│   │       ├── components/
│   │       │   └── (...)                 # Componentes relacionados a la subasta
│   │       ├── models/
│   │       │   └── auction.model.ts      # Modelo e interfaz de Subasta
│   │       └── services/
│   │           └── auction.service.ts    # Servicio para gestión de subastas
│   ├── pages/
│   │   ├── auction-detail-page/         # Página de detalle de una subasta
│   │   ├── auction-list-page/           # Página de listado de subastas
│   │   └── create-auction-page/         # Página para crear una nueva subasta
│   └── routes/
│       └── app.routes.ts                # Configuración principal de rutas
├── env/
│   └── environment.ts                   # Variables de entorno (API base URL, etc.)
```

---

## ⚙️ Funcionalidades Requeridas

### 🧭 Navegación y Rutas

#### ✅ 1. Configuración de Rutas (5 puntos)

Agregar las siguientes rutas al archivo `app.routes.ts`:

- `/`: Muestra el listado de subastas.
- `/:id`: Muestra el detalle de una subasta.
- `/create-auction`: Muestra el formulario de creación de una nueva subasta.

---

### 🔧 Servicios

#### ✅ 2. Completar `user.service.ts` (10 puntos)

- Implementar el método `fetchUsers()` para obtener la lista de usuarios desde la API y filtrar aquellos con `isActive === true`.
- Implementar el método `getUserById(id)` para obtener un usuario específico por su ID desde la API.

#### ✅ 3. Completar `auction.service.ts` (20 puntos)

- `getAllAuctions()`: Obtener todas las subastas.
- `getAuctionById(id)`: Obtener una subasta específica por su ID.
- `createAuction(auction)`: Crear una nueva subasta enviando los datos correspondientes al backend.
- `bid(auctionId, userId, amount)`: Enviar una puja a una subasta.

---

### 🧩 Componentes

#### ✅ 4. Componente de listado de subastas (10 puntos)

- Implementar la lógica para mostrar todas las subastas en el archivo `.html`.

#### ✅ 5. Componente de creación de subasta (20 puntos)

- Implementar un formulario utilizando **Template-driven Forms**.
- Validar los campos requeridos.
- Implementar el método `onSubmit()` para enviar los datos al servicio y gestionar el resultado.

#### ✅ 6. Componente de detalle de subasta (35 puntos)

- Implementar el método `placeBid()` con todas las validaciones necesarias:

  - Usuario seleccionado.
  - Subasta activa.
  - Monto mayor al actual.
  - Saldo suficiente.

- Enviar la puja mediante el servicio y actualizar:

  - El estado local de la subasta.
  - El usuario actual (`currentUser`).
  - El listado general de usuarios (`userList$`).

---

## 🧪 Evaluación

| Área Evaluada                                               | Puntos      |
| ----------------------------------------------------------- | ----------- |
| Configuración de rutas                                      | 5 pts       |
| Implementación de `getUsers()` en `UserService`             | 5 pts       |
| Implementación de `getUserById()` en `UserService`          | 5 pts       |
| Obtener subastas en `AuctionService`                        | 5 pts       |
| Obtener subasta por ID en `AuctionService`                  | 5 pts       |
| Crear subasta en `AuctionService`                           | 5 pts       |
| Realizar una puja en `AuctionService`                       | 5 pts       |
| Visualización de subastas en componente HTML                | 10 pts      |
| Formulario de creación de subasta (estructura y validación) | 15 pts      |
| Lógica de envío del formulario `onSubmit()`                 | 5 pts       |
| Método `placeBid()` y lógica asociada                       | 35 pts      |
| **Total**                                                   | **100 pts** |

---

## 📌 Recomendaciones y Consideraciones

- 📌 **Firmas y formatos:**
  Es fundamental **respetar las firmas de métodos** e interfaces definidas por el backend. La conversión de nombres `snake_case` (backend) a `camelCase` (frontend) se realiza automáticamente mediante un interceptor de Angular. No es necesario transformarlos manualmente.

- 🔍 **Uso del buscador:**
  Todos los puntos pendientes están marcados con comentarios `TODO:`.
  Se recomienda utilizar la búsqueda de VSCode/WebStorm y buscar `TODO:` para encontrarlos rápidamente.

---
