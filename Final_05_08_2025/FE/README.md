# 📚 Examen Final – Sistema de Subastas en Angular

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
