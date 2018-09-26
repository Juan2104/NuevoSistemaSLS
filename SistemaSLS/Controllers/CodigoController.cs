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

    public class CodigoController : Controller
    {
        private SlsContext context;
        private CodigoService CodigoService;
        IMapper Mapper;


        public CodigoController()
        {
            context = new SlsContext();
            CodigoService = new CodigoService(context);
            Mapper = ConfigureAutoMapper.MapperConfiguration.CreateMapper();
        }



        //  : Codigo
        public ActionResult Index()
        {
            return View();
        }


        public async Task<JsonResult> Get()
        {
            return Json(Mapper.Map<List<CodigoDTO>>(await CodigoService.GetAll()), JsonRequestBehavior.AllowGet);
        }


        public JsonResult Post(CodigoDTO CodigoDTO)
        {
            var result = new
            {
                CodigoDTOid = CodigoService.SaveCodigo(Mapper.Map<SistemaSLS.Domain.Entities.Codigo>(CodigoDTO))
            };

            return Json(result, JsonRequestBehavior.AllowGet);
        }

        public JsonResult Update(CodigoDTO CodigoDTO)
        {
            var result = new
            {
                CodigoDTOid = CodigoService.EditCodigo(Mapper.Map<SistemaSLS.Domain.Entities.Codigo>(CodigoDTO))
            };

            return Json(result, JsonRequestBehavior.AllowGet);
        }

        public JsonResult Delete(int IdCodigo)
        {
            CodigoService.DeleteCodigo(IdCodigo);
            return Json("", JsonRequestBehavior.AllowGet);
        }

    }
}