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
    public class CodigoService
    {
        private readonly IBaseRepository<Codigo> _CodigoRepository;
        private readonly ISlsContext SlsContext;

        public CodigoService(ISlsContext context)
        {
            _CodigoRepository = new CodigoRepository(context);
            SlsContext = context;
        }

        public CodigoService(IBaseRepository<Codigo> CodigoRepository)
        {
            _CodigoRepository = CodigoRepository;
        }


        public async Task<List<Codigo>> GetAll()
        {
            return (await _CodigoRepository.GetAll()).ToList();
        }



        public int SaveCodigo(Codigo emp)
        {

            _CodigoRepository.Add(emp);
            SlsContext.SaveChanges();
            return 1;
        }

        public int EditCodigo(Codigo emp)
        {
            var empToEdit = _CodigoRepository.GetById(emp.IdCodigo);
            empToEdit.Descripcion = emp.Descripcion;

            //empToEdit.= mesa.Descripcion;
            //rolToEdit.ReadOnly = rol.Edit;
            //rolToEdit.Edit = rol.ReadOnly;
            //rolToEdit.EditWho = HttpContext.Current.User.Identity.Name;
            _CodigoRepository.Update(empToEdit);
            SlsContext.SaveChanges();
            return 1;
        }

        public void DeleteCodigo(int IdCodigo)
        {
            var CodigoDB = _CodigoRepository.GetById(IdCodigo);
            _CodigoRepository.Delete(CodigoDB);
            SlsContext.SaveChanges();
        }



        public Codigo GetById(int id)
        {
            try
            {
                return _CodigoRepository.GetById(id);
            }
            catch (Exception ex)
            {
                throw ex;
            }
        }
    }
}
