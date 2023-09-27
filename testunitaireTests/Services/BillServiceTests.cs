using Microsoft.VisualStudio.TestTools.UnitTesting;
using testunitaire.Services;
using System;
using System.Collections.Generic;
using System.Linq;
using Microsoft.EntityFrameworkCore;
using testunitaire.Data;
using testunitaire.Models;

namespace testunitaire.Services.Tests
{
    [TestClass()]
    public class BillServiceTests
    {
        DbContextOptions<ApplicationDbContext> options;

        public BillServiceTests()
        {
            options = new DbContextOptionsBuilder<ApplicationDbContext>()
                .UseInMemoryDatabase(databaseName: "BillsService")
                .Options;
        }

        [TestMethod()]
        public void CreateBill_ValidInput_ReturnsBill()
        {
            // Arrange
            using (var context = new ApplicationDbContext(options))
            {
                var service = new BillService(context);

                // Act
                var bill = service.CreateBill("Test Bill", new List<Item> { new Item { Price = 10 } });

                // Assert
                Assert.IsNotNull(bill);
                Assert.AreEqual("Test Bill", bill.Name);
            }
        }

        [TestMethod()]
        [ExpectedException(typeof(Exception))]
        public void CreateBill_NullName_ThrowsException()
        {
            // Arrange
            using (var context = new ApplicationDbContext(options))
            {
                var service = new BillService(context);

                // Act
                service.CreateBill(null, new List<Item> { new Item { Price = 10 } });

                // Assert: Exception is expected
            }
        }

        [TestMethod()]
        public void CreateBill_NoItems_ReturnsNull()
        {
            // Arrange
            using (var context = new ApplicationDbContext(options))
            {
                var service = new BillService(context);

                // Act
                var bill = service.CreateBill("Empty Bill", new List<Item>());

                // Assert
                Assert.IsNull(bill);
            }
        }

        [TestMethod()]
        [ExpectedException(typeof(AreYouInsaneException))]
        public void CreateBill_NegativePrice_ThrowsAreYouInsaneException()
        {
            // Arrange
            using (var context = new ApplicationDbContext(options))
            {
                var service = new BillService(context);

                // Act
                service.CreateBill("Negative Price Bill", new List<Item> { new Item { Price = -5 } });

                // Assert: AreYouInsaneException is expected
            }
        }

        [TestMethod()]
        [ExpectedException(typeof(AreYouInsaneException))]
        public void CreateBill_ZeroPrice_ThrowsAreYouInsaneException()
        {
            // Arrange
            using (var context = new ApplicationDbContext(options))
            {
                var service = new BillService(context);

                // Act
                service.CreateBill("Zero Price Bill", new List<Item> { new Item { Price = 0 } });

                // Assert: AreYouInsaneException is expected
            }
        }
    }
}
