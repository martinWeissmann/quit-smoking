import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export default async function handler(req, res) {
  const { method } = req;
  
  switch (method) {
    case 'GET':
      try {
        // Leer todas las respuestas
        const responses = await prisma.response.findMany();
        res.status(200).json(responses);
      } catch (error) {
        res.status(500).json({ error: 'Error fetching responses' });
      }
      break;
    case 'POST':
      try {
        // Crear una nueva respuesta
        const {
          fumaste,
          sentisteMejoras,
          sentisteInquieto,
          capacidadRespirar,
          nivelEnergiaVitalidad,
          sentidoGusto,
          dientesUnas,
          calidadSueno,
          menosAnsiedadEstres,
          estadoAnimo,
          menosAntojos,
          problemasDigestivos,
          presionArterialMejora,
          cambiosRitmoCardiaco
        } = req.body;
        const newResponse = await prisma.response.create({
          data: {
            fumaste,
            sentisteMejoras,
            sentisteInquieto,
            capacidadRespirar,
            nivelEnergiaVitalidad,
            sentidoGusto,
            dientesUnas,
            calidadSueno,
            menosAnsiedadEstres,
            estadoAnimo,
            menosAntojos,
            problemasDigestivos,
            presionArterialMejora,
            cambiosRitmoCardiaco
          },
        });
        res.status(201).json(newResponse);
      } catch (error) {
        res.status(500).json({ error: 'Error creating response' });
      }
      break;
    case 'PUT':
      try {
        // Actualizar una respuesta
        const { id, ...updatedData } = req.body;
        const updatedResponse = await prisma.response.update({
          where: { id: Number(id) },
          data: updatedData,
        });
        res.status(200).json(updatedResponse);
      } catch (error) {
        res.status(500).json({ error: 'Error updating response' });
      }
      break;
    case 'DELETE':
      try {
        // Eliminar una respuesta
        const { id } = req.body;
        await prisma.response.delete({
          where: { id: Number(id) },
        });
        res.status(204).end();
      } catch (error) {
        res.status(500).json({ error: 'Error deleting response' });
      }
      break;
    default:
      res.setHeader('Allow', ['GET', 'POST', 'PUT', 'DELETE']);
      res.status(405).end(`Method ${method} Not Allowed`);
  }
}
