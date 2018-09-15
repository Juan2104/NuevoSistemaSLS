using SistemaSLS.Data.Context;
using SistemaSLS.Data.Repositories.Base;
using SistemaSLS.Domain.Entities;

namespace SistemaSLS.Data.Repositories
{
    public class CondicionFiscalRepository : BaseRepository<ISlsContext, CondicionFiscal>
    {
        public CondicionFiscalRepository(ISlsContext context) : base(context)
        {
        }
    }
}