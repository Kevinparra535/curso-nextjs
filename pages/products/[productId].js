// Librerias
import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";

// Contextos

// Hooks

// Componentes

// Imagenes

// Estilos

/**
 * Descripción: La descripción de por qué estamos haciendo este componente y que resuelve.
 *
 * Implementación: Descripción sobre cómo puedes implementar el componente.
 *
 * Bugs: Qué bugs se han presentado y como se solucionan.
 */

const id = () => {
  // Estados

  // Contextos

  // Hooks
  const router = useRouter()

  // Funciones

  // UseEffects

  return (
    <>
        <h3>Pagina del producto: {router.query.productId}</h3>
    </>
  );
};

export default id;
