# Task Manager Frontend

Una aplicación web moderna para la gestión de tareas desarrollada con React, TypeScript y Vite. Esta aplicación proporciona una interfaz intuitiva para crear, visualizar, actualizar y eliminar tareas con funcionalidades de filtrado y paginación.

## 📋 Tabla de Contenidos

- [Características](#características)
- [Tecnologías Utilizadas](#tecnologías-utilizadas)
- [Arquitectura del Proyecto](#arquitectura-del-proyecto)
- [Instalación y Configuración](#instalación-y-configuración)
- [Estructura del Proyecto](#estructura-del-proyecto)
- [Componentes UI](#componentes-ui)
- [Hooks Personalizados](#hooks-personalizados)
- [Interfaces TypeScript](#interfaces-typescript)
- [Configuración de API](#configuración-de-api)
- [Scripts Disponibles](#scripts-disponibles)
- [Configuración de Desarrollo](#configuración-de-desarrollo)

## ✨ Características

- **Gestión Completa de Tareas**: Crear, leer, actualizar y eliminar tareas
- **Filtrado por Estado**: Filtrar tareas por estado (pendiente, en progreso, completada)
- **Paginación**: Navegación eficiente entre páginas de resultados
- **Interfaz Responsiva**: Diseño adaptativo para diferentes tamaños de pantalla
- **Notificaciones**: Sistema de notificaciones con react-toastify
- **Validación de Formularios**: Validación robusta con react-hook-form
- **Arquitectura Atómica**: Organización de componentes siguiendo Atomic Design

## 🛠 Tecnologías Utilizadas

### Core

- **React 19.1.1**: Biblioteca de interfaz de usuario
- **TypeScript 5.8.3**: Tipado estático para JavaScript
- **Vite 7.1.2**: Herramienta de construcción y desarrollo

### UI y Estilos

- **Tailwind CSS 4.1.12**: Framework de CSS utility-first
- **React Icons 5.5.0**: Biblioteca de iconos
- **React Toastify 11.0.5**: Notificaciones toast

### Routing y Formularios

- **React Router 7.3.0**: Enrutamiento de la aplicación
- **React Hook Form 7.62.0**: Gestión de formularios

### HTTP y Estado

- **Axios 1.11.0**: Cliente HTTP para peticiones a la API

### Desarrollo

- **ESLint 9.33.0**: Linting de código
- **TypeScript ESLint 8.39.1**: Reglas de linting para TypeScript

## 🏗 Arquitectura del Proyecto

El proyecto sigue una arquitectura modular basada en **Atomic Design** y **Clean Architecture**:

```
src/
├── api/           # Configuración de API y servicios
├── hooks/         # Hooks personalizados para lógica de negocio
├── interfaces/    # Definiciones de tipos TypeScript
├── ui/            # Componentes de interfaz organizados por Atomic Design
│   ├── atoms/     # Componentes básicos (Loading, etc.)
│   ├── molecules/ # Componentes compuestos (TaskCard, Navbar, etc.)
│   ├── organisms/ # Componentes complejos (TaskList, UpdateTaskForm)
│   ├── pages/     # Páginas de la aplicación
│   └── layout/    # Layouts y estructuras de página
└── main.tsx       # Punto de entrada de la aplicación
```

## 🚀 Instalación y Configuración

### Prerrequisitos

- Node.js (versión 18 o superior)
- npm o yarn

### Instalación

1. **Clonar el repositorio**

   ```bash
   git clone <repository-url>
   cd task-manager-front
   ```

2. **Instalar dependencias**

   ```bash
   npm install
   ```

3. **Configurar variables de entorno**
   Crear un archivo `.env` en la raíz del proyecto:

   ```env
   VITE_API_URL=http://localhost:3000/api
   ```

4. **Ejecutar en modo desarrollo**
   ```bash
   npm run dev
   ```

La aplicación estará disponible en `http://localhost:5173`

## 📁 Estructura del Proyecto

### `/src/api/`

- **axios-config.ts**: Configuración base de Axios con interceptores y configuración de headers

### `/src/hooks/`

- **useTasks.tsx**: Hook personalizado que encapsula toda la lógica de gestión de tareas (CRUD operations)

### `/src/interfaces/`

- **Task.interface.ts**: Definiciones de tipos TypeScript para tareas y respuestas de API

### `/src/ui/`

Organización siguiendo Atomic Design:

#### Atoms

- **Loading.tsx**: Componente de carga reutilizable

#### Molecules

- **TaskCard.tsx**: Tarjeta individual de tarea
- **Navbar.tsx**: Barra de navegación
- **Pagination.tsx**: Componente de paginación
- **StatusFilter.tsx**: Filtro por estado de tareas
- **Footer.tsx**: Pie de página (comentado)

#### Organisms

- **TaskList.tsx**: Lista de tareas que renderiza múltiples TaskCard
- **UpdateTaskForm.tsx**: Formulario para actualizar tareas

#### Pages

- **Tasks.tsx**: Página principal con lista de tareas y filtros
- **TaskDetail.tsx**: Página de detalle de una tarea específica
- **CreateTask.tsx**: Página para crear nuevas tareas

#### Layout

- **TasksLayout.tsx**: Layout principal con navbar y estructura base

## 🎨 Componentes UI

### TaskCard

Componente molecular que representa una tarea individual:

- Muestra título, descripción, estado y prioridad
- Colores dinámicos según el estado de la tarea
- Interactivo con hover effects
- Navegación al hacer clic

### TaskList

Organismo que renderiza una grilla de TaskCard:

- Layout responsivo (1 columna en móvil, 2 en tablet, 3 en desktop)
- Manejo de navegación a detalles de tarea

### StatusFilter

Filtro desplegable para estados de tareas:

- Opciones: Pendiente, En progreso, Completada, Todas
- Integración con el hook useTasks

### Pagination

Navegación entre páginas de resultados:

- Cálculo automático de páginas totales
- Navegación por input numérico

## 🪝 Hooks Personalizados

### useTasks

Hook principal que maneja toda la lógica de tareas:

```typescript
const {
  tasks, // Array de tareas
  loading, // Estado de carga
  error, // Mensaje de error
  getTasks, // Obtener lista de tareas
  getTask, // Obtener tarea específica
  deleteTask, // Eliminar tarea
  createTask, // Crear nueva tarea
  updateTask, // Actualizar tarea existente
  task, // Tarea individual
  pages, // Número total de páginas
} = useTasks();
```

**Características:**

- Gestión centralizada de estado
- Manejo de errores consistente
- Operaciones CRUD completas
- Paginación integrada
- Filtrado por estado

## 📝 Interfaces TypeScript

### Task

```typescript
interface Task {
  id: number;
  title: string;
  description: string;
  status: string;
  priority: number;
  dueDate: Date | null;
  createdAt: Date;
  updatedAt: Date;
}
```

### Respuestas de API

- `GetTasksResponse`: Respuesta paginada de tareas
- `GetTaskResponse`: Respuesta de tarea individual
- `CreateTaskResponse`: Respuesta de creación
- `UpdateTaskResponse`: Respuesta de actualización
- `DeleteTaskResponse`: Respuesta de eliminación

## 🔧 Configuración de API

### Axios Configuration

```typescript
const taskManagerApi = axios.create({
  baseURL: import.meta.env.VITE_API_URL,
  timeout: 10000,
  headers: {
    "Content-Type": "application/json",
    Accept: "application/json",
  },
});
```

### Endpoints Utilizados

- `GET /tasks` - Obtener lista de tareas (con paginación y filtros)
- `GET /tasks/:id` - Obtener tarea específica
- `POST /tasks` - Crear nueva tarea
- `PATCH /tasks/:id` - Actualizar tarea existente
- `DELETE /tasks/:id` - Eliminar tarea

## 📜 Scripts Disponibles

```json
{
  "dev": "vite", // Servidor de desarrollo
  "build": "tsc -b && vite build", // Construcción para producción
  "lint": "eslint .", // Linting del código
  "preview": "vite preview" // Vista previa de build
}
```

## ⚙️ Configuración de Desarrollo

### TypeScript

- Configuración modular con referencias de proyecto
- Path mapping para imports más limpios
- Configuración estricta de tipos

### ESLint

- Configuración moderna con flat config
- Reglas específicas para React y TypeScript
- Integración con Vite para hot reload

### Vite

- Plugin de React para Fast Refresh
- Integración con Tailwind CSS
- Configuración optimizada para desarrollo

### Tailwind CSS

- Configuración v4 con integración nativa de Vite
- Utilidades personalizadas para el diseño
- Sistema de colores consistente

## 🎯 Estados de Tareas

La aplicación maneja tres estados principales:

1. **Pendiente** (`pendiente`): Tareas que aún no han comenzado
2. **En Progreso** (`en_progreso`): Tareas que están siendo trabajadas
3. **Completada** (`completada`): Tareas finalizadas

Cada estado tiene su propio esquema de colores para mejor identificación visual.

## 🔄 Flujo de Datos

1. **Inicialización**: La aplicación carga y obtiene la primera página de tareas
2. **Filtrado**: Los usuarios pueden filtrar por estado usando StatusFilter
3. **Navegación**: Pagination permite navegar entre páginas de resultados
4. **Detalles**: Al hacer clic en una tarea, se navega a su vista detallada
5. **CRUD**: Las operaciones de creación, actualización y eliminación se manejan a través de formularios

## 🚀 Despliegue

Para construir la aplicación para producción:

```bash
npm run build
```

Los archivos optimizados se generarán en el directorio `dist/`.

## 🤝 Contribución

1. Fork el proyecto
2. Crea una rama para tu feature (`git checkout -b feature/AmazingFeature`)
3. Commit tus cambios (`git commit -m 'Add some AmazingFeature'`)
4. Push a la rama (`git push origin feature/AmazingFeature`)
5. Abre un Pull Request

## 📄 Licencia

Este proyecto está bajo la Licencia MIT. Ver el archivo `LICENSE` para más detalles.

---

**Desarrollado con ❤️ usando React, TypeScript y Vite**
