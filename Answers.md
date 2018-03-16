1. Database is where we store the entire database; collection is a specific set of data within that database; document is a specific file within a given collection

2. The Schema needs to have a property with the type set as ObjectId and ref set to the file you want to reference. Then when we want to reference it, we call it using .populate('referenced').

