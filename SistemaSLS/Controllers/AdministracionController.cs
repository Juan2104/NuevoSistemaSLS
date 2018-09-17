using AutoMapper;
using SistemaSLS.Data.Context;
using SistemaSLS.Service.Services;
using SistemaSLS.Utils;
using SistemaSLS.Domain.Entities;
using SistemaSLS.Domain.DTOs;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using System.Threading.Tasks;
namespace SistemaSLS.Controllers
{

    public class AdministracionController : Controller
    {
        private SlsContext context;
        private MedioCobroService MedioCobroService;
        private TipoDocumentoService TipoDocumentoService;
        private TipoMonedaService TipoMonedaService;
        private CondicionFiscalService CondicionFiscalService;
        IMapper Mapper;


        public AdministracionController()
        {
            context = new SlsContext();
            MedioCobroService = new MedioCobroService(context);
            TipoDocumentoService = new TipoDocumentoService(context);
            TipoMonedaService = new TipoMonedaService(context);
            CondicionFiscalService = new CondicionFiscalService(context);
            Mapper = ConfigureAutoMapper.MapperConfiguration.CreateMapper();
        }



        //  : MedioCobro
        public ActionResult Index()
        {
            return View();
        }


        public async Task<JsonResult> Get()
        {
            var result = new
            {
                MedioCobro = Mapper.Map<List<MedioCobroDTO>>(await MedioCobroService.GetAll()),
                TipoDocumento = Mapper.Map<List<TipoDocumentoDTO>>(await TipoDocumentoService.GetAll()),
                TipoMoneda = Mapper.Map<List<TipoMonedaDTO>>(await TipoMonedaService.GetAll()),
                CondicionFiscal = Mapper.Map<List<CondicionFiscalDTO>>(await CondicionFiscalService.GetAll()),
            };

            return Json(result, JsonRequestBehavior.AllowGet);

        }


        public JsonResult Post(MedioCobroDTO MedioCobroDTO)
        {
            var result = new
            {
                MedioCobroDTOid = MedioCobroService.SaveMedioCobro(Mapper.Map<SistemaSLS.Domain.Entities.MedioCobro>(MedioCobroDTO))
            };

            return Json(result, JsonRequestBehavior.AllowGet);
        }

        public JsonResult Update(MedioCobroDTO MedioCobroDTO)
        {
            var result = new
            {
                MedioCobroDTOid = MedioCobroService.EditMedioCobro(Mapper.Map<SistemaSLS.Domain.Entities.MedioCobro>(MedioCobroDTO))
            };

            return Json(result, JsonRequestBehavior.AllowGet);
        }

        public JsonResult Delete(int IdMedioCobro)
        {
            MedioCobroService.DeleteMedioCobro(IdMedioCobro);
            return Json("", JsonRequestBehavior.AllowGet);
        }




        public JsonResult Post(TipoDocumentoDTO TipoDocumentoDTO)
        {
            var result = new
            {
                TipoDocumentoDTOid = TipoDocumentoService.SaveTipoDocumento(Mapper.Map<SistemaSLS.Domain.Entities.TipoDocumento>(TipoDocumentoDTO))
            };

            return Json(result, JsonRequestBehavior.AllowGet);
        }

        public JsonResult Update(TipoDocumentoDTO TipoDocumentoDTO)
        {
            var result = new
            {
                TipoDocumentoDTOid = TipoDocumentoService.EditTipoDocumento(Mapper.Map<SistemaSLS.Domain.Entities.TipoDocumento>(TipoDocumentoDTO))
            };

            return Json(result, JsonRequestBehavior.AllowGet);
        }

        public JsonResult DeleteTipoDocumento(int IdTipoDocumento)
        {
            TipoDocumentoService.DeleteTipoDocumento(IdTipoDocumento);
            return Json("", JsonRequestBehavior.AllowGet);
        }





        public JsonResult Post(TipoMonedaDTO TipoMonedaDTO)
        {
            var result = new
            {
                TipoMonedaDTOid = TipoMonedaService.SaveTipoMoneda(Mapper.Map<SistemaSLS.Domain.Entities.TipoMoneda>(TipoMonedaDTO))
            };

            return Json(result, JsonRequestBehavior.AllowGet);
        }

        public JsonResult Update(TipoMonedaDTO TipoMonedaDTO)
        {
            var result = new
            {
                TipoMonedaDTOid = TipoMonedaService.EditTipoMoneda(Mapper.Map<SistemaSLS.Domain.Entities.TipoMoneda>(TipoMonedaDTO))
            };

            return Json(result, JsonRequestBehavior.AllowGet);
        }

        public JsonResult DeleteTipoMoneda(int IdTipoMoneda)
        {
            TipoMonedaService.DeleteTipoMoneda(IdTipoMoneda);
            return Json("", JsonRequestBehavior.AllowGet);
        }





        public JsonResult Post(CondicionFiscalDTO CondicionFiscalDTO)
        {
            var result = new
            {
                CondicionFiscalDTOid = CondicionFiscalService.SaveCondicionFiscal(Mapper.Map<SistemaSLS.Domain.Entities.CondicionFiscal>(CondicionFiscalDTO))
            };

            return Json(result, JsonRequestBehavior.AllowGet);
        }

        public JsonResult Update(CondicionFiscalDTO CondicionFiscalDTO)
        {
            var result = new
            {
                CondicionFiscalDTOid = CondicionFiscalService.EditCondicionFiscal(Mapper.Map<SistemaSLS.Domain.Entities.CondicionFiscal>(CondicionFiscalDTO))
            };

            return Json(result, JsonRequestBehavior.AllowGet);
        }

        public JsonResult DeleteCondicionFiscal(int IdCondicionFiscal)
        {
            CondicionFiscalService.DeleteCondicionFiscal(IdCondicionFiscal);
            return Json("", JsonRequestBehavior.AllowGet);
        }




    }
}