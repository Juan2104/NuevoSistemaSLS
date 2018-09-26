using SistemaSLS.Data.Context;
using SistemaSLS.Data.Repositories.Base;
using SistemaSLS.Domain.Entities;

namespace SistemaSLS.Data.Repositories
{
    public class CodigoRepository : BaseRepository<ISlsContext, Codigo>
    {
        public CodigoRepository(ISlsContext context) : base(context)
        {
        }
    }
}
