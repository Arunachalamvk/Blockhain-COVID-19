/**
 * Trade a product to a new player
 * @param {org.hyperledger_composer.scms.MoveProduct} moveProduct - the trade product transaction
 * @transaction
 */
async function moveProduct(moveProduct) { // eslint-disable-line no-unused-vars
    moveProduct.patient.status = moveProduct.status;
    moveProduct.patient.remarks = moveProduct.remarks;
    moveProduct.patient.date = moveProduct.date;
    const assetRegistry = await getAssetRegistry('org.hyperledger_composer.scms.Patient');
    await assetRegistry.update(moveProduct.patient);
   }