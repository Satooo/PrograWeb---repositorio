--
-- PostgreSQL database dump
--

-- Dumped from database version 14.5
-- Dumped by pg_dump version 14.5

-- Started on 2022-11-17 19:06:44 -05

SET statement_timeout = 0;
SET lock_timeout = 0;
SET idle_in_transaction_session_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SELECT pg_catalog.set_config('search_path', '', false);
SET check_function_bodies = false;
SET xmloption = content;
SET client_min_messages = warning;
SET row_security = off;

DROP DATABASE proyectopw;
--
-- TOC entry 3622 (class 1262 OID 16509)
-- Name: proyectopw; Type: DATABASE; Schema: -; Owner: grupo5
--

CREATE DATABASE proyectopw WITH TEMPLATE = template0 ENCODING = 'UTF8' LOCALE = 'C';


ALTER DATABASE proyectopw OWNER TO grupo5;

\connect proyectopw

SET statement_timeout = 0;
SET lock_timeout = 0;
SET idle_in_transaction_session_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SELECT pg_catalog.set_config('search_path', '', false);
SET check_function_bodies = false;
SET xmloption = content;
SET client_min_messages = warning;
SET row_security = off;

SET default_tablespace = '';

SET default_table_access_method = heap;

--
-- TOC entry 211 (class 1259 OID 16527)
-- Name: Orden; Type: TABLE; Schema: public; Owner: grupo5
--

CREATE TABLE public."Orden" (
    "Orden_id" uuid NOT NULL,
    "Usuario_id" uuid NOT NULL,
    "Monto" integer NOT NULL,
    "Direccion" character varying NOT NULL,
    "Fecha" timestamp without time zone NOT NULL
);


ALTER TABLE public."Orden" OWNER TO grupo5;

--
-- TOC entry 214 (class 1259 OID 16558)
-- Name: Orden_producto; Type: TABLE; Schema: public; Owner: grupo5
--

CREATE TABLE public."Orden_producto" (
    "Orden_Producto_id" uuid NOT NULL,
    "Orden_id" uuid NOT NULL,
    "Producto_id" uuid
);


ALTER TABLE public."Orden_producto" OWNER TO grupo5;

--
-- TOC entry 215 (class 1259 OID 16573)
-- Name: PC_Armado; Type: TABLE; Schema: public; Owner: grupo5
--

CREATE TABLE public."PC_Armado" (
    "PC_Armado_id" uuid NOT NULL,
    "Nombre" character varying NOT NULL,
    "Descripcion" character varying NOT NULL
);


ALTER TABLE public."PC_Armado" OWNER TO grupo5;

--
-- TOC entry 216 (class 1259 OID 16600)
-- Name: PC_Armado_Producto; Type: TABLE; Schema: public; Owner: grupo5
--

CREATE TABLE public."PC_Armado_Producto" (
    "PC_Armado_Producto_id" uuid NOT NULL,
    "Producto_id" uuid NOT NULL,
    "PC_Armado_id" uuid NOT NULL
);


ALTER TABLE public."PC_Armado_Producto" OWNER TO grupo5;

--
-- TOC entry 213 (class 1259 OID 16551)
-- Name: Producto; Type: TABLE; Schema: public; Owner: grupo5
--

CREATE TABLE public."Producto" (
    "Producto_id" uuid NOT NULL,
    "Nombre" character varying NOT NULL,
    "Precio" integer NOT NULL,
    "Descripcion" character varying NOT NULL,
    "Categoria" character varying NOT NULL
);


ALTER TABLE public."Producto" OWNER TO grupo5;

--
-- TOC entry 210 (class 1259 OID 16517)
-- Name: Reporte; Type: TABLE; Schema: public; Owner: grupo5
--

CREATE TABLE public."Reporte" (
    "Reporte_id" uuid NOT NULL,
    "Usuario_id" uuid NOT NULL,
    "Correo" character varying,
    "Nombre" character varying,
    "Telefono" character varying,
    "Asunto" character varying,
    "Descripcion" character varying
);


ALTER TABLE public."Reporte" OWNER TO grupo5;

--
-- TOC entry 212 (class 1259 OID 16539)
-- Name: Resena; Type: TABLE; Schema: public; Owner: grupo5
--

CREATE TABLE public."Resena" (
    "Resena_id" uuid NOT NULL,
    "Usuario_id" uuid NOT NULL,
    "Puntaje" integer,
    "Comentario" character varying,
    "Video" character varying,
    "Link" character varying,
    "Tpo_resena" character varying
);


ALTER TABLE public."Resena" OWNER TO grupo5;

--
-- TOC entry 209 (class 1259 OID 16510)
-- Name: Usuario; Type: TABLE; Schema: public; Owner: grupo5
--

CREATE TABLE public."Usuario" (
    "Usuario_id" uuid NOT NULL,
    "Nombre" character varying NOT NULL,
    "Apellido" character varying NOT NULL,
    "Correo" character varying NOT NULL,
    "Contrasena" character varying NOT NULL,
    "Direccion" character varying NOT NULL,
    "Departamento" character varying NOT NULL,
    "Ciudad" character varying NOT NULL,
    "Codigo_postal" character varying NOT NULL,
    "Telefono" character varying
);


ALTER TABLE public."Usuario" OWNER TO grupo5;

--
-- TOC entry 3460 (class 2606 OID 16533)
-- Name: Orden Orden_pkey; Type: CONSTRAINT; Schema: public; Owner: grupo5
--

ALTER TABLE ONLY public."Orden"
    ADD CONSTRAINT "Orden_pkey" PRIMARY KEY ("Orden_id");


--
-- TOC entry 3466 (class 2606 OID 16562)
-- Name: Orden_producto Orden_producto_pkey; Type: CONSTRAINT; Schema: public; Owner: grupo5
--

ALTER TABLE ONLY public."Orden_producto"
    ADD CONSTRAINT "Orden_producto_pkey" PRIMARY KEY ("Orden_Producto_id");


--
-- TOC entry 3470 (class 2606 OID 16604)
-- Name: PC_Armado_Producto PC_Armado_Producto_pkey; Type: CONSTRAINT; Schema: public; Owner: grupo5
--

ALTER TABLE ONLY public."PC_Armado_Producto"
    ADD CONSTRAINT "PC_Armado_Producto_pkey" PRIMARY KEY ("PC_Armado_Producto_id");


--
-- TOC entry 3468 (class 2606 OID 16599)
-- Name: PC_Armado PC_Armado_pkey; Type: CONSTRAINT; Schema: public; Owner: grupo5
--

ALTER TABLE ONLY public."PC_Armado"
    ADD CONSTRAINT "PC_Armado_pkey" PRIMARY KEY ("PC_Armado_id");


--
-- TOC entry 3464 (class 2606 OID 16557)
-- Name: Producto Producto_pkey; Type: CONSTRAINT; Schema: public; Owner: grupo5
--

ALTER TABLE ONLY public."Producto"
    ADD CONSTRAINT "Producto_pkey" PRIMARY KEY ("Producto_id");


--
-- TOC entry 3462 (class 2606 OID 16545)
-- Name: Resena Resena_pkey; Type: CONSTRAINT; Schema: public; Owner: grupo5
--

ALTER TABLE ONLY public."Resena"
    ADD CONSTRAINT "Resena_pkey" PRIMARY KEY ("Resena_id");


--
-- TOC entry 3458 (class 2606 OID 16516)
-- Name: Usuario Usuario_pkey; Type: CONSTRAINT; Schema: public; Owner: grupo5
--

ALTER TABLE ONLY public."Usuario"
    ADD CONSTRAINT "Usuario_pkey" PRIMARY KEY ("Usuario_id");


--
-- TOC entry 3475 (class 2606 OID 16568)
-- Name: Orden_producto Orden_fk; Type: FK CONSTRAINT; Schema: public; Owner: grupo5
--

ALTER TABLE ONLY public."Orden_producto"
    ADD CONSTRAINT "Orden_fk" FOREIGN KEY ("Orden_id") REFERENCES public."Orden"("Orden_id");


--
-- TOC entry 3477 (class 2606 OID 16610)
-- Name: PC_Armado_Producto PC_Armado_fk; Type: FK CONSTRAINT; Schema: public; Owner: grupo5
--

ALTER TABLE ONLY public."PC_Armado_Producto"
    ADD CONSTRAINT "PC_Armado_fk" FOREIGN KEY ("PC_Armado_id") REFERENCES public."PC_Armado"("PC_Armado_id");


--
-- TOC entry 3474 (class 2606 OID 16563)
-- Name: Orden_producto Producto_fk; Type: FK CONSTRAINT; Schema: public; Owner: grupo5
--

ALTER TABLE ONLY public."Orden_producto"
    ADD CONSTRAINT "Producto_fk" FOREIGN KEY ("Producto_id") REFERENCES public."Producto"("Producto_id");


--
-- TOC entry 3476 (class 2606 OID 16605)
-- Name: PC_Armado_Producto Producto_fk; Type: FK CONSTRAINT; Schema: public; Owner: grupo5
--

ALTER TABLE ONLY public."PC_Armado_Producto"
    ADD CONSTRAINT "Producto_fk" FOREIGN KEY ("Producto_id") REFERENCES public."Producto"("Producto_id");


--
-- TOC entry 3471 (class 2606 OID 16522)
-- Name: Reporte Usuario_fk; Type: FK CONSTRAINT; Schema: public; Owner: grupo5
--

ALTER TABLE ONLY public."Reporte"
    ADD CONSTRAINT "Usuario_fk" FOREIGN KEY ("Usuario_id") REFERENCES public."Usuario"("Usuario_id");


--
-- TOC entry 3472 (class 2606 OID 16534)
-- Name: Orden Usuario_fk; Type: FK CONSTRAINT; Schema: public; Owner: grupo5
--

ALTER TABLE ONLY public."Orden"
    ADD CONSTRAINT "Usuario_fk" FOREIGN KEY ("Usuario_id") REFERENCES public."Usuario"("Usuario_id");


--
-- TOC entry 3473 (class 2606 OID 16546)
-- Name: Resena Usuario_fk; Type: FK CONSTRAINT; Schema: public; Owner: grupo5
--

ALTER TABLE ONLY public."Resena"
    ADD CONSTRAINT "Usuario_fk" FOREIGN KEY ("Usuario_id") REFERENCES public."Usuario"("Usuario_id");


-- Completed on 2022-11-17 19:06:44 -05

--
-- PostgreSQL database dump complete
--