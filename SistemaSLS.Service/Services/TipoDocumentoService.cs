using SistemaSLS.Data.Repositories.Base;
using SistemaSLS.Data.Context;
using SistemaSLS.Data.Repositories;
using SistemaSLS.Domain.Entities;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace SistemaSLS.Service.Services
{
    public class TipoDocumentoService
    {
        private readonly IBaseRepository<TipoDocumento> _TipoDocumentoRepository;
        private readonly ISlsContext SlsContext;

        public TipoDocumentoService(ISlsContext context)
        {
            _TipoDocumentoRepository = new TipoDocumentoRepository(context);
            SlsContext = context;
        }

        public TipoDocumentoService(IBaseRepository<TipoDocumento> TipoDocumentoRepository)
        {
            _TipoDocumentoRepository = TipoDocumentoRepository;
        }


        public async Task<List<TipoDocumento>> GetAll()
        {
            return (await _TipoDocumentoRepository.GetAll()).ToList();
        }



        public int SaveTipoDocumento(TipoDocumento emp)
        {

            _TipoDocumentoRepository.Add(emp);
            SlsContext.SaveChanges();
            return 1;
        }

        public int EditTipoDocumento(TipoDocumento emp)
        {
            var empToEdit = _TipoDocumentoRepository.GetById(emp.IdTipoDocumento);
            empToEdit.Descripcion = emp.Descripcion;

            //empToEdit.= mesa.Descripcion;
            //rolToEdit.ReadOnly = rol.Edit;
            //rolToEdit.Edit = rol.ReadOnly;
            //rolToEdit.EditWho = HttpContext.Current.User.Identity.Name;
            _TipoDocumentoRepository.Update(empToEdit);
            SlsContext.SaveChanges();
            return 1;
        }

        public void DeleteTipoDocumento(int IdTipoDocumento)
        {
            var TipoDocumentoDB = _TipoDocumentoRepository.GetById(IdTipoDocumento);
            _TipoDocumentoRepository.Delete(TipoDocumentoDB);
            SlsContext.SaveChanges();
        }



        public TipoDocumento GetById(int id)
        {
            try
            {
                return _TipoDocumentoRepository.GetById(id);
            }
            catch (Exception ex)
            {
                throw ex;
            }
        }
    }
}

