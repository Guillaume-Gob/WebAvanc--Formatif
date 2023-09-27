using Microsoft.AspNetCore.Identity.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore;
using testunitaire.Models;

namespace testunitaire.Data
{
    public class ApplicationDbContext : IdentityDbContext
    {
        public ApplicationDbContext(DbContextOptions<ApplicationDbContext> options)
            : base(options)
        {
        }

        // Define DbSet for the Item entity
        public DbSet<Item> Items { get; set; }

        // Define DbSet for the Bill entity
        public DbSet<Bill> Bills { get; set; }
    }
}