using SistemaSLS.Data.Context;
using SistemaSLS.Data.Repositories.Base;
using SistemaSLS.Domain.Entities;

namespace SistemaSLS.Data.Repositories
{
    public class MedioCobroRepository : BaseRepository<ISlsContext, MedioCobro>
    {
        public MedioCobroRepository(ISlsContext context) : base(context)
        {
        }
    }
}
