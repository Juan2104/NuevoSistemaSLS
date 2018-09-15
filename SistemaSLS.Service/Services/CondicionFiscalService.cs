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
    public class CondicionFiscalService
    {
        private readonly IBaseRepository<CondicionFiscal> _CondicionFiscalRepository;
        private readonly ISlsContext SlsContext;

        public CondicionFiscalService(ISlsContext context)
        {
            _CondicionFiscalRepository = new CondicionFiscalRepository(context);
            SlsContext = context;
        }

        public CondicionFiscalService(IBaseRepository<CondicionFiscal> CondicionFiscalRepository)
        {
            _CondicionFiscalRepository = CondicionFiscalRepository;
        }


        public async Task<List<CondicionFiscal>> GetAll()
        {
            return (await _CondicionFiscalRepository.GetAll()).ToList();
        }



        public int SaveCondicionFiscal(CondicionFiscal emp)
        {

            _CondicionFiscalRepository.Add(emp);
            SlsContext.SaveChanges();
            return 1;
        }

        public int EditCondicionFiscal(CondicionFiscal emp)
        {
            var empToEdit = _CondicionFiscalRepository.GetById(emp.IdCondicionFiscal);
            empToEdit.Descripcion = emp.Descripcion;
            empToEdit.IVA = emp.IVA;

            //empToEdit.= mesa.Descripcion;
            //rolToEdit.ReadOnly = rol.Edit;
            //rolToEdit.Edit = rol.ReadOnly;
            //rolToEdit.EditWho = HttpContext.Current.User.Identity.Name;
            _CondicionFiscalRepository.Update(empToEdit);
            SlsContext.SaveChanges();
            return 1;
        }

        public void DeleteCondicionFiscal(int IdCondicionFiscal)
        {
            var CondicionFiscalDB = _CondicionFiscalRepository.GetById(IdCondicionFiscal);
            _CondicionFiscalRepository.Delete(CondicionFiscalDB);
            SlsContext.SaveChanges();
        }



        public CondicionFiscal GetById(int id)
        {
            try
            {
                return _CondicionFiscalRepository.GetById(id);
            }
            catch (Exception ex)
            {
                throw ex;
            }
        }
    }
}

