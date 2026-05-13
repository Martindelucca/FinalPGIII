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
