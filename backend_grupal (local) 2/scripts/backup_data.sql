--
-- PostgreSQL database dump
--

-- Dumped from database version 14.5
-- Dumped by pg_dump version 14.5

-- Started on 2022-11-17 19:06:11 -05

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

--
-- TOC entry 3630 (class 1262 OID 16509)
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

--
-- TOC entry 3617 (class 0 OID 16510)
-- Dependencies: 209
-- Data for Name: Usuario; Type: TABLE DATA; Schema: public; Owner: grupo5
--



--
-- TOC entry 3619 (class 0 OID 16527)
-- Dependencies: 211
-- Data for Name: Orden; Type: TABLE DATA; Schema: public; Owner: grupo5
--



--
-- TOC entry 3621 (class 0 OID 16551)
-- Dependencies: 213
-- Data for Name: Producto; Type: TABLE DATA; Schema: public; Owner: grupo5
--

INSERT INTO public."Producto" ("Producto_id", "Nombre", "Precio", "Descripcion", "Categoria") VALUES ('b8a32b12-f57d-4913-a908-a34626a01fb9', 'NVIDIA GeForce GTx base', 200, 'Desc', 'Graficas');
INSERT INTO public."Producto" ("Producto_id", "Nombre", "Precio", "Descripcion", "Categoria") VALUES ('7755b2c2-dff5-44be-98e6-8f0474950f2e', 'NVIDIA GeForce GTx max', 200, 'Desc', 'Graficas');
INSERT INTO public."Producto" ("Producto_id", "Nombre", "Precio", "Descripcion", "Categoria") VALUES ('4eb2134c-58e3-4db7-ac51-816edb59ad8b', 'NVIDIA GeForce Metal', 200, 'Desc', 'Graficas');
INSERT INTO public."Producto" ("Producto_id", "Nombre", "Precio", "Descripcion", "Categoria") VALUES ('b6ffe55d-d049-428c-b3d5-26239ebc5c48', 'NVIDIA GeForce Omega', 400, 'Desc', 'Graficas');
INSERT INTO public."Producto" ("Producto_id", "Nombre", "Precio", "Descripcion", "Categoria") VALUES ('1a235e6e-073f-4bc4-9af7-9f8fe7f4da53', 'Intel I3', 200, 'Desc', 'Procesador');
INSERT INTO public."Producto" ("Producto_id", "Nombre", "Precio", "Descripcion", "Categoria") VALUES ('639196ca-5dff-420e-9a48-5bffcfd2aaaa', 'Intel I5', 200, 'Desc', 'Procesador');
INSERT INTO public."Producto" ("Producto_id", "Nombre", "Precio", "Descripcion", "Categoria") VALUES ('96b843d3-c8c8-4386-bc5e-78162c6629f5', 'Intel I7', 200, 'Desc', 'Procesador');
INSERT INTO public."Producto" ("Producto_id", "Nombre", "Precio", "Descripcion", "Categoria") VALUES ('54bb0e7b-7622-4f9c-bac2-ab8d965a8c6f', 'Intel I9', 400, 'Desc', 'Procesador');
INSERT INTO public."Producto" ("Producto_id", "Nombre", "Precio", "Descripcion", "Categoria") VALUES ('0bb3d456-e571-4a32-8ad5-686da48c1618', 'RAM 4gb', 200, 'Desc', 'Memoria');
INSERT INTO public."Producto" ("Producto_id", "Nombre", "Precio", "Descripcion", "Categoria") VALUES ('6fe5437b-1e38-4d47-a8fe-8891bbb5c9d6', 'PowerSupply Max', 400, 'Desc', 'Power');
INSERT INTO public."Producto" ("Producto_id", "Nombre", "Precio", "Descripcion", "Categoria") VALUES ('181f0125-915c-404e-b288-7e2298bcbc1b', 'PowerSupply Base', 200, 'Desc', 'Power');
INSERT INTO public."Producto" ("Producto_id", "Nombre", "Precio", "Descripcion", "Categoria") VALUES ('afb92372-6bcd-4e65-a523-e3fe13e17f16', 'RAM 8gb', 200, 'Desc', 'Memoria');
INSERT INTO public."Producto" ("Producto_id", "Nombre", "Precio", "Descripcion", "Categoria") VALUES ('7b59a399-f661-44bc-af9d-3a673da48d88', 'RAM 16gb', 200, 'Desc', 'Memoria');
INSERT INTO public."Producto" ("Producto_id", "Nombre", "Precio", "Descripcion", "Categoria") VALUES ('11eb1206-41c4-427f-9beb-568da167a682', 'RAM 32gb', 400, 'Desc', 'Memoria');
INSERT INTO public."Producto" ("Producto_id", "Nombre", "Precio", "Descripcion", "Categoria") VALUES ('21852dcc-0d68-4223-a1aa-cf2b6283bf9e', 'Toshiba 500gb', 200, 'Desc', 'Almacenamiento');
INSERT INTO public."Producto" ("Producto_id", "Nombre", "Precio", "Descripcion", "Categoria") VALUES ('4e8e3736-c1f1-46c6-afe3-a278d3fda715', 'Toshiba 1TB', 200, 'Desc', 'Almacenamiento');
INSERT INTO public."Producto" ("Producto_id", "Nombre", "Precio", "Descripcion", "Categoria") VALUES ('12ae6005-1d50-4f34-a6d7-5d1d1f2c19ec', 'Toshiba 2TB', 200, 'Desc', 'Almacenamiento');
INSERT INTO public."Producto" ("Producto_id", "Nombre", "Precio", "Descripcion", "Categoria") VALUES ('663f4048-20aa-42e4-a76c-e2db67e4f69d', 'Toshiba 3TB', 400, 'Desc', 'Almacenamiento');
INSERT INTO public."Producto" ("Producto_id", "Nombre", "Precio", "Descripcion", "Categoria") VALUES ('d4ab1367-e8f5-40c4-9fc3-abb18dc52d4a', 'Cooler 10', 200, 'Desc', 'Cooler');
INSERT INTO public."Producto" ("Producto_id", "Nombre", "Precio", "Descripcion", "Categoria") VALUES ('996c55bc-8c22-411e-81aa-c793d31c93a0', 'Cooler 20', 200, 'Desc', 'Cooler');
INSERT INTO public."Producto" ("Producto_id", "Nombre", "Precio", "Descripcion", "Categoria") VALUES ('02b4e425-db94-4204-830f-2a1d9c3a1d3b', 'Cooler 30', 200, 'Desc', 'Cooler');
INSERT INTO public."Producto" ("Producto_id", "Nombre", "Precio", "Descripcion", "Categoria") VALUES ('de905b42-f396-4787-a86e-aef64df78b43', 'Cooler 40', 400, 'Desc', 'Cooler');
INSERT INTO public."Producto" ("Producto_id", "Nombre", "Precio", "Descripcion", "Categoria") VALUES ('1d4a6d5b-b53d-44ea-8884-8b34166eba37', 'Windows 8 32bit AMD', 200, 'Desc', 'Windows');
INSERT INTO public."Producto" ("Producto_id", "Nombre", "Precio", "Descripcion", "Categoria") VALUES ('05ef9582-34bc-42e8-ac02-d33ee90048f8', 'Windows 8 64bit AMD', 200, 'Desc', 'Windows');
INSERT INTO public."Producto" ("Producto_id", "Nombre", "Precio", "Descripcion", "Categoria") VALUES ('68c8a125-94aa-4073-828f-9e730594ebeb', 'Windows 8 32bit Intel', 200, 'Desc', 'Windows');
INSERT INTO public."Producto" ("Producto_id", "Nombre", "Precio", "Descripcion", "Categoria") VALUES ('ad809a4d-18bd-4934-a493-cd3974e876b8', 'Windows 8 64bit Intel', 400, 'Desc', 'Windows');


--
-- TOC entry 3622 (class 0 OID 16558)
-- Dependencies: 214
-- Data for Name: Orden_producto; Type: TABLE DATA; Schema: public; Owner: grupo5
--



--
-- TOC entry 3623 (class 0 OID 16573)
-- Dependencies: 215
-- Data for Name: PC_Armado; Type: TABLE DATA; Schema: public; Owner: grupo5
--

INSERT INTO public."PC_Armado" ("PC_Armado_id", "Nombre", "Descripcion") VALUES ('d66ba21d-648a-4ad5-97c8-540b0710ecf4', 'gaming', 'desc');
INSERT INTO public."PC_Armado" ("PC_Armado_id", "Nombre", "Descripcion") VALUES ('0efc9437-81d4-45a8-a30e-efaaf8daeaeb', 'design', 'desc');
INSERT INTO public."PC_Armado" ("PC_Armado_id", "Nombre", "Descripcion") VALUES ('d075a6a4-d609-4215-b6ba-c1d1725fc0e5', 'coding', 'desc');
INSERT INTO public."PC_Armado" ("PC_Armado_id", "Nombre", "Descripcion") VALUES ('61ebe896-0aa4-43f1-b967-44fd57dcdf24', 'rendering', 'desc');
INSERT INTO public."PC_Armado" ("PC_Armado_id", "Nombre", "Descripcion") VALUES ('dad561a4-e921-4976-b0eb-b06e23c6b2fd', 'office', 'desc');
INSERT INTO public."PC_Armado" ("PC_Armado_id", "Nombre", "Descripcion") VALUES ('09df901a-6712-4d3e-b3df-5c419bc8acfe', 'other', 'desc');


--
-- TOC entry 3624 (class 0 OID 16600)
-- Dependencies: 216
-- Data for Name: PC_Armado_Producto; Type: TABLE DATA; Schema: public; Owner: grupo5
--

INSERT INTO public."PC_Armado_Producto" ("PC_Armado_Producto_id", "Producto_id", "PC_Armado_id") VALUES ('8d51486c-5b0c-46b3-a778-30e70defd73d', 'ad809a4d-18bd-4934-a493-cd3974e876b8', 'd66ba21d-648a-4ad5-97c8-540b0710ecf4');
INSERT INTO public."PC_Armado_Producto" ("PC_Armado_Producto_id", "Producto_id", "PC_Armado_id") VALUES ('77b43a54-77cb-4e51-9731-35ca602534c4', '54bb0e7b-7622-4f9c-bac2-ab8d965a8c6f', 'd66ba21d-648a-4ad5-97c8-540b0710ecf4');
INSERT INTO public."PC_Armado_Producto" ("PC_Armado_Producto_id", "Producto_id", "PC_Armado_id") VALUES ('ec5bc009-3c38-4c0c-844e-ba387ce49aa5', '181f0125-915c-404e-b288-7e2298bcbc1b', 'd66ba21d-648a-4ad5-97c8-540b0710ecf4');
INSERT INTO public."PC_Armado_Producto" ("PC_Armado_Producto_id", "Producto_id", "PC_Armado_id") VALUES ('8daa6fd4-744c-4da7-85ef-15e95b989823', '7b59a399-f661-44bc-af9d-3a673da48d88', 'd66ba21d-648a-4ad5-97c8-540b0710ecf4');
INSERT INTO public."PC_Armado_Producto" ("PC_Armado_Producto_id", "Producto_id", "PC_Armado_id") VALUES ('3faafc7e-5d83-434e-b062-948487a15bc3', '7755b2c2-dff5-44be-98e6-8f0474950f2e', 'd66ba21d-648a-4ad5-97c8-540b0710ecf4');
INSERT INTO public."PC_Armado_Producto" ("PC_Armado_Producto_id", "Producto_id", "PC_Armado_id") VALUES ('838f0c1f-7ee0-468a-9ca9-185b6e62b013', '996c55bc-8c22-411e-81aa-c793d31c93a0', 'd66ba21d-648a-4ad5-97c8-540b0710ecf4');
INSERT INTO public."PC_Armado_Producto" ("PC_Armado_Producto_id", "Producto_id", "PC_Armado_id") VALUES ('0e352d74-20a8-4fbb-8c97-dc5d18a6bea5', '21852dcc-0d68-4223-a1aa-cf2b6283bf9e', 'd66ba21d-648a-4ad5-97c8-540b0710ecf4');
INSERT INTO public."PC_Armado_Producto" ("PC_Armado_Producto_id", "Producto_id", "PC_Armado_id") VALUES ('faa221c1-df92-461d-9082-d4054317cede', '05ef9582-34bc-42e8-ac02-d33ee90048f8', '0efc9437-81d4-45a8-a30e-efaaf8daeaeb');
INSERT INTO public."PC_Armado_Producto" ("PC_Armado_Producto_id", "Producto_id", "PC_Armado_id") VALUES ('20d68837-2fb0-4b2d-a056-8204994989b7', '54bb0e7b-7622-4f9c-bac2-ab8d965a8c6f', '0efc9437-81d4-45a8-a30e-efaaf8daeaeb');
INSERT INTO public."PC_Armado_Producto" ("PC_Armado_Producto_id", "Producto_id", "PC_Armado_id") VALUES ('eb7d068f-9789-4ab7-b518-43b8e187fa6f', '6fe5437b-1e38-4d47-a8fe-8891bbb5c9d6', '0efc9437-81d4-45a8-a30e-efaaf8daeaeb');
INSERT INTO public."PC_Armado_Producto" ("PC_Armado_Producto_id", "Producto_id", "PC_Armado_id") VALUES ('072ef170-bd03-4ffd-8819-f56f7c846fa3', '11eb1206-41c4-427f-9beb-568da167a682', '0efc9437-81d4-45a8-a30e-efaaf8daeaeb');
INSERT INTO public."PC_Armado_Producto" ("PC_Armado_Producto_id", "Producto_id", "PC_Armado_id") VALUES ('67f2c30b-d44f-4d0e-824f-a6109760c2fd', '4eb2134c-58e3-4db7-ac51-816edb59ad8b', '0efc9437-81d4-45a8-a30e-efaaf8daeaeb');
INSERT INTO public."PC_Armado_Producto" ("PC_Armado_Producto_id", "Producto_id", "PC_Armado_id") VALUES ('f35bce4a-7998-4672-be8e-7f583d3778f6', '996c55bc-8c22-411e-81aa-c793d31c93a0', '0efc9437-81d4-45a8-a30e-efaaf8daeaeb');
INSERT INTO public."PC_Armado_Producto" ("PC_Armado_Producto_id", "Producto_id", "PC_Armado_id") VALUES ('95ee2d95-af88-4d0a-8374-aefa7fc73c8a', '21852dcc-0d68-4223-a1aa-cf2b6283bf9e', '0efc9437-81d4-45a8-a30e-efaaf8daeaeb');
INSERT INTO public."PC_Armado_Producto" ("PC_Armado_Producto_id", "Producto_id", "PC_Armado_id") VALUES ('8cd16053-e52a-4237-bdb1-cfe3d38669ab', '05ef9582-34bc-42e8-ac02-d33ee90048f8', 'd075a6a4-d609-4215-b6ba-c1d1725fc0e5');
INSERT INTO public."PC_Armado_Producto" ("PC_Armado_Producto_id", "Producto_id", "PC_Armado_id") VALUES ('abae2490-4aca-439a-b691-580b9863b87a', '54bb0e7b-7622-4f9c-bac2-ab8d965a8c6f', 'd075a6a4-d609-4215-b6ba-c1d1725fc0e5');
INSERT INTO public."PC_Armado_Producto" ("PC_Armado_Producto_id", "Producto_id", "PC_Armado_id") VALUES ('28ee5a0a-d348-464e-8b6b-61694b54f1ee', '6fe5437b-1e38-4d47-a8fe-8891bbb5c9d6', 'd075a6a4-d609-4215-b6ba-c1d1725fc0e5');
INSERT INTO public."PC_Armado_Producto" ("PC_Armado_Producto_id", "Producto_id", "PC_Armado_id") VALUES ('89588eb2-6410-43f7-afda-324441ff75a4', '11eb1206-41c4-427f-9beb-568da167a682', 'd075a6a4-d609-4215-b6ba-c1d1725fc0e5');
INSERT INTO public."PC_Armado_Producto" ("PC_Armado_Producto_id", "Producto_id", "PC_Armado_id") VALUES ('cbe62347-94ba-4851-8ef9-9e5d21a20b3d', 'b6ffe55d-d049-428c-b3d5-26239ebc5c48', 'd075a6a4-d609-4215-b6ba-c1d1725fc0e5');
INSERT INTO public."PC_Armado_Producto" ("PC_Armado_Producto_id", "Producto_id", "PC_Armado_id") VALUES ('739b11e8-1dcc-442f-b767-b6d3acd651b3', '996c55bc-8c22-411e-81aa-c793d31c93a0', 'd075a6a4-d609-4215-b6ba-c1d1725fc0e5');
INSERT INTO public."PC_Armado_Producto" ("PC_Armado_Producto_id", "Producto_id", "PC_Armado_id") VALUES ('e072f091-182c-4dc6-963a-c75a69e0ad95', '663f4048-20aa-42e4-a76c-e2db67e4f69d', 'd075a6a4-d609-4215-b6ba-c1d1725fc0e5');
INSERT INTO public."PC_Armado_Producto" ("PC_Armado_Producto_id", "Producto_id", "PC_Armado_id") VALUES ('5d36dfe7-1114-478f-9a81-2a35bcf42a1b', '05ef9582-34bc-42e8-ac02-d33ee90048f8', '61ebe896-0aa4-43f1-b967-44fd57dcdf24');
INSERT INTO public."PC_Armado_Producto" ("PC_Armado_Producto_id", "Producto_id", "PC_Armado_id") VALUES ('02421b0b-e7b8-499e-86f8-1c5da2363c54', '96b843d3-c8c8-4386-bc5e-78162c6629f5', '61ebe896-0aa4-43f1-b967-44fd57dcdf24');
INSERT INTO public."PC_Armado_Producto" ("PC_Armado_Producto_id", "Producto_id", "PC_Armado_id") VALUES ('e0f403ad-c8f7-45f2-990b-27f55f2dc00d', '6fe5437b-1e38-4d47-a8fe-8891bbb5c9d6', '61ebe896-0aa4-43f1-b967-44fd57dcdf24');
INSERT INTO public."PC_Armado_Producto" ("PC_Armado_Producto_id", "Producto_id", "PC_Armado_id") VALUES ('7faee45d-d3bc-49a9-9c91-5d7606edfb75', '7b59a399-f661-44bc-af9d-3a673da48d88', '61ebe896-0aa4-43f1-b967-44fd57dcdf24');
INSERT INTO public."PC_Armado_Producto" ("PC_Armado_Producto_id", "Producto_id", "PC_Armado_id") VALUES ('d7eef88a-57fb-4b45-9f54-3185ac74083b', 'b6ffe55d-d049-428c-b3d5-26239ebc5c48', '61ebe896-0aa4-43f1-b967-44fd57dcdf24');
INSERT INTO public."PC_Armado_Producto" ("PC_Armado_Producto_id", "Producto_id", "PC_Armado_id") VALUES ('831aa751-54f1-434d-b173-1599f075c050', '996c55bc-8c22-411e-81aa-c793d31c93a0', '61ebe896-0aa4-43f1-b967-44fd57dcdf24');
INSERT INTO public."PC_Armado_Producto" ("PC_Armado_Producto_id", "Producto_id", "PC_Armado_id") VALUES ('09574661-d0a7-4e44-b4c2-710b2b9ad2f9', '663f4048-20aa-42e4-a76c-e2db67e4f69d', '61ebe896-0aa4-43f1-b967-44fd57dcdf24');
INSERT INTO public."PC_Armado_Producto" ("PC_Armado_Producto_id", "Producto_id", "PC_Armado_id") VALUES ('adb4ea46-c91f-4954-8b07-3ed999cd326b', '1d4a6d5b-b53d-44ea-8884-8b34166eba37', 'dad561a4-e921-4976-b0eb-b06e23c6b2fd');
INSERT INTO public."PC_Armado_Producto" ("PC_Armado_Producto_id", "Producto_id", "PC_Armado_id") VALUES ('c11e0551-80a1-4256-a69f-539157c90f45', '639196ca-5dff-420e-9a48-5bffcfd2aaaa', 'dad561a4-e921-4976-b0eb-b06e23c6b2fd');
INSERT INTO public."PC_Armado_Producto" ("PC_Armado_Producto_id", "Producto_id", "PC_Armado_id") VALUES ('603fd4fb-2dc1-438a-bc2d-a76e1ab7a932', '181f0125-915c-404e-b288-7e2298bcbc1b', 'dad561a4-e921-4976-b0eb-b06e23c6b2fd');
INSERT INTO public."PC_Armado_Producto" ("PC_Armado_Producto_id", "Producto_id", "PC_Armado_id") VALUES ('d729c175-c71b-4191-bb0b-033bb643a596', 'afb92372-6bcd-4e65-a523-e3fe13e17f16', 'dad561a4-e921-4976-b0eb-b06e23c6b2fd');
INSERT INTO public."PC_Armado_Producto" ("PC_Armado_Producto_id", "Producto_id", "PC_Armado_id") VALUES ('c343cdde-3a11-4578-90c2-7ce223b0190e', 'b8a32b12-f57d-4913-a908-a34626a01fb9', 'dad561a4-e921-4976-b0eb-b06e23c6b2fd');
INSERT INTO public."PC_Armado_Producto" ("PC_Armado_Producto_id", "Producto_id", "PC_Armado_id") VALUES ('511ac4f0-b77f-4254-a45d-d913bbebe42a', '996c55bc-8c22-411e-81aa-c793d31c93a0', 'dad561a4-e921-4976-b0eb-b06e23c6b2fd');
INSERT INTO public."PC_Armado_Producto" ("PC_Armado_Producto_id", "Producto_id", "PC_Armado_id") VALUES ('21e61f04-3dca-4cd3-a85e-531b95fd0255', '663f4048-20aa-42e4-a76c-e2db67e4f69d', 'dad561a4-e921-4976-b0eb-b06e23c6b2fd');
INSERT INTO public."PC_Armado_Producto" ("PC_Armado_Producto_id", "Producto_id", "PC_Armado_id") VALUES ('dace289e-544d-4b37-a675-155a17d6cd4b', '1d4a6d5b-b53d-44ea-8884-8b34166eba37', '09df901a-6712-4d3e-b3df-5c419bc8acfe');
INSERT INTO public."PC_Armado_Producto" ("PC_Armado_Producto_id", "Producto_id", "PC_Armado_id") VALUES ('bdfe7227-c5e6-413d-96c0-4e148e52169a', '639196ca-5dff-420e-9a48-5bffcfd2aaaa', '09df901a-6712-4d3e-b3df-5c419bc8acfe');
INSERT INTO public."PC_Armado_Producto" ("PC_Armado_Producto_id", "Producto_id", "PC_Armado_id") VALUES ('b1d2d6af-0f13-47ef-b86d-7673baa1556e', '181f0125-915c-404e-b288-7e2298bcbc1b', '09df901a-6712-4d3e-b3df-5c419bc8acfe');
INSERT INTO public."PC_Armado_Producto" ("PC_Armado_Producto_id", "Producto_id", "PC_Armado_id") VALUES ('d3d98d00-be18-47c9-809b-d398fefede7a', 'afb92372-6bcd-4e65-a523-e3fe13e17f16', '09df901a-6712-4d3e-b3df-5c419bc8acfe');
INSERT INTO public."PC_Armado_Producto" ("PC_Armado_Producto_id", "Producto_id", "PC_Armado_id") VALUES ('f9423ba4-b8c0-45f7-8ae9-9aa7395f87f0', 'b8a32b12-f57d-4913-a908-a34626a01fb9', '09df901a-6712-4d3e-b3df-5c419bc8acfe');
INSERT INTO public."PC_Armado_Producto" ("PC_Armado_Producto_id", "Producto_id", "PC_Armado_id") VALUES ('f751790c-f03a-4c52-af43-f3f54c85d650', '996c55bc-8c22-411e-81aa-c793d31c93a0', '09df901a-6712-4d3e-b3df-5c419bc8acfe');
INSERT INTO public."PC_Armado_Producto" ("PC_Armado_Producto_id", "Producto_id", "PC_Armado_id") VALUES ('effba999-f731-4230-b308-1db1ca3590c4', '663f4048-20aa-42e4-a76c-e2db67e4f69d', '09df901a-6712-4d3e-b3df-5c419bc8acfe');


--
-- TOC entry 3618 (class 0 OID 16517)
-- Dependencies: 210
-- Data for Name: Reporte; Type: TABLE DATA; Schema: public; Owner: grupo5
--



--
-- TOC entry 3620 (class 0 OID 16539)
-- Dependencies: 212
-- Data for Name: Resena; Type: TABLE DATA; Schema: public; Owner: grupo5
--



-- Completed on 2022-11-17 19:06:11 -05

--
-- PostgreSQL database dump complete
--
