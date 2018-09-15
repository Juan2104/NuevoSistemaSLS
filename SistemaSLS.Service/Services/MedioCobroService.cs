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
    public class MedioCobroService
    {
        private readonly IBaseRepository<MedioCobro> _MedioCobroRepository;
        private readonly ISlsContext SlsContext;

        public MedioCobroService(ISlsContext context)
        {
            _MedioCobroRepository = new MedioCobroRepository(context);
            SlsContext = context;
        }

        public MedioCobroService(IBaseRepository<MedioCobro> MedioCobroRepository)
        {
            _MedioCobroRepository = MedioCobroRepository;
        }


        public async Task<List<MedioCobro>> GetAll()
        {
            return (await _MedioCobroRepository.GetAll()).ToList();
        }



        public int SaveMedioCobro(MedioCobro emp)
        {

            _MedioCobroRepository.Add(emp);
            SlsContext.SaveChanges();
            return 1;
        }

        public int EditMedioCobro(MedioCobro emp)
        {
            var empToEdit = _MedioCobroRepository.GetById(emp.IdMedioCobro);
            empToEdit.Descripcion = emp.Descripcion;

            //empToEdit.= mesa.Descripcion;
            //rolToEdit.ReadOnly = rol.Edit;
            //rolToEdit.Edit = rol.ReadOnly;
            //rolToEdit.EditWho = HttpContext.Current.User.Identity.Name;
            _MedioCobroRepository.Update(empToEdit);
            SlsContext.SaveChanges();
            return 1;
        }

        public void DeleteMedioCobro(int IdMedioCobro)
        {
            var MedioCobroDB = _MedioCobroRepository.GetById(IdMedioCobro);
            _MedioCobroRepository.Delete(MedioCobroDB);
            SlsContext.SaveChanges();
        }



        public MedioCobro GetById(int id)
        {
            try
            {
                return _MedioCobroRepository.GetById(id);
            }
            catch (Exception ex)
            {
                throw ex;
            }
        }
    }
}

