import React, { useState, useEffect, useRef } from "react";
import { classNames } from "primereact/utils";
import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";

import { Toast } from "primereact/toast";
import { Button } from "primereact/button";


import { Toolbar } from "primereact/toolbar";

import { Dialog } from "primereact/dialog";
import { InputText } from "primereact/inputtext";



import { apiEducatrice } from "../../../services/api/apiEducatrice";
import {   IEducatrice } from "../../../services/models/models";
import { api } from "../../../services/api/api";


interface ColumnMeta {
  field: string;
  header: string;
}

export default function AddEducatrice () {
  let emptyProduct: IEducatrice = {
    id_educatrice:0,
    nom:'',
    prenom:'',
    email:'',
    telephone:'',
  };
  const [ecueData, setEnseignantData] = useState<IEducatrice>({
    id_educatrice:0,
    nom:'',
    prenom:'',
    email:'',
    telephone:'',
  });


  //call api

  const handleChange = (e: any) => {
    const { name, value } = e.target;
    setEnseignantData({ ...ecueData, [name]: value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Données du formulaire:", ecueData);
    api
      .addEducatrice (product )
      .then((res) => {
        toast.current?.show({
          severity: "success",
          summary: "Super",
          detail: "Utilisateur enregistré",
          life: 3000,
        });
        console.log(res);
        // navigate("../gestionStudent")
      })
      .catch((err) => {
        toast.current?.show({
          severity: "error",
          summary: "Erreur",
          detail: "Email ou de passe incorrect",
          life: 3000,
        });
      });
  };


  const cols: ColumnMeta[] = [
    { field: 'nom', header: 'Nom ' },
    { field: 'prenom', header: 'Prenom' },
    { field: 'email', header: 'Email' },
    { field: 'telephone', header: 'Telephone' },
    // { field: 'niveau', header: 'Niveau' },
  ];

  const exportColumns = cols.map((col) => ({ title: col.header, dataKey: col.field }));

  const [products, setProducts] = useState<IEducatrice[]>([]);
  const [productDialog, setProductDialog] = useState<boolean>(false);
  const [deleteProductDialog, setDeleteProductDialog] =
    useState<boolean>(false);
  const [deleteProductsDialog, setDeleteProductsDialog] =
    useState<boolean>(false);
  const [product, setProduct] = useState<IEducatrice>(emptyProduct);
  const [selectedProducts, setSelectedProducts] = useState<IEducatrice[]>([]);
  const [submitted, setSubmitted] = useState<boolean>(false);
  const [globalFilter, setGlobalFilter] = useState<string>("");
  const [selectedCities, setSelectedCities] = useState(null);

  const [selectedDroit, setSelectedDroit] = useState(null);
  const cities = [
    { name: "Admin", code: "NY" },
    { name: "JO", code: "RM" },
    { name: "DG", code: "LDN" },
  ];
  const toast = useRef<Toast>(null);
  const dt = useRef<DataTable<IEducatrice[]>>(null);

  useEffect(() => {
    api.getEducatrice().then((res) => setProducts(res.data));
  }, []);

  const openNew = () => {
    setProduct(emptyProduct);
    setSubmitted(false);
    setProductDialog(true);
  };

  const hideDialog = () => {
    setSubmitted(false);
    setProductDialog(false);
  };

  const hideDeleteProductDialog = () => {
    setDeleteProductDialog(false);
  };

  const hideDeleteProductsDialog = () => {
    setDeleteProductsDialog(false);
  };

  const saveProduct = () => {
    setSubmitted(true);

    if (product.nom.trim()) {
      let _products = [...products];
      let _product = { ...product };

      if (product.id_educatrice) {
        const index = findIndexById(product.id_educatrice);

        _products[index] = _product;
        toast.current?.show({
          severity: "success",
          summary: "Successful",
          detail: "utilisateur enregistré",
          life: 3000,
        });
      } else {
        _product.id_educatrice = createId();
        _products.push(_product);
        toast.current?.show({
          severity: "success",
          summary: "Successful",
          detail: "utilisateur enregistré",
          life: 3000,
        });
      }

      setProducts(_products);
      setProductDialog(false);
      setProduct(emptyProduct);
    }
  };

  const editProduct = (product: IEducatrice) => {
    setProduct({ ...product });
    setProductDialog(true);
  };

  const confirmDeleteProduct = (product: IEducatrice) => {
    setProduct(product);
    setDeleteProductDialog(true);
    console.log("delete", product)
  };

  const deleteProduct = () => {
    
    setDeleteProductDialog(false);
    setProduct(emptyProduct);
    api.deleteEducatrice(product.id_educatrice).then((res) => {
        toast.current?.show({
            severity: "success",
            summary: "Successful",
            detail: "utilisateur supprimé",
            life: 3000,
          });
          api.getEducatrice().then((res) => setProducts(res.data));
    });
   
  };

  const findIndexById = (id: number) => {
    let index = -1;

    for (let i = 0; i < products.length; i++) {
      if (products[i].id_educatrice === id) {
        index = i;
        break;
      }
    }

    return index;
  };

  const createId = () => {
    let id = 0;
    let chars =
      "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

    for (let i = 0; i < 5; i++) {
      id += Math.floor(Math.random() );
    }

    return id;
  };
  // @ts-ignore
  const exportCSV = (selectionOnly) => {
    dt.current?.exportCSV({ selectionOnly });
};

const exportPdf = () => {
    import('jspdf').then((jsPDF) => {
        import('jspdf-autotable').then(() => {
          // @ts-ignore
            const doc = new jsPDF.default(0, 0);
            // @ts-ignore
            doc.autoTable(exportColumns, products);
            doc.save('utilisateurs.pdf');
        });
    });
};

const exportExcel = () => {
    import('xlsx').then((xlsx) => {
        const worksheet = xlsx.utils.json_to_sheet(products);
        const workbook = { Sheets: { data: worksheet }, SheetNames: ['data'] };
        const excelBuffer = xlsx.write(workbook, {
            bookType: 'xlsx',
            type: 'array'
        });

        saveAsExcelFile(excelBuffer, 'utilisateurs');
    });
};
// @ts-ignore
const saveAsExcelFile = (buffer, fileName) => {
  // @ts-ignore
    import('file-saver').then((module) => {
        if (module && module.default) {
            let EXCEL_TYPE = 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet;charset=UTF-8';
            let EXCEL_EXTENSION = '.xlsx';
            const data = new Blob([buffer], {
                type: EXCEL_TYPE
            });

            module.default.saveAs(data, fileName + '_export_' + new Date().getTime() + EXCEL_EXTENSION);
        }
    });
};

  const confirmDeleteSelected = () => {
    setDeleteProductsDialog(true);
  };

  const deleteSelectedProducts = () => {
    let _products = products.filter((val) => !selectedProducts.includes(val));

    setProducts(_products);
    setDeleteProductsDialog(false);
    setSelectedProducts([]);
    toast.current?.show({
      severity: "success",
      summary: "Successful",
      detail: "utilisateur supprimé",
      life: 3000,
    });
  };

  const onInputChange = (
    e: React.ChangeEvent<HTMLInputElement>,
    name: string
  ) => {
    const val = (e.target && e.target.value) || "";
    let _product = { ...product };

    // @ts-ignore
    _product[`${name}`] = val;

    setProduct(_product);
  };

  const leftToolbarTemplate = () => {
    return (
      <div className="flex flex-wrap gap-2">
        <Button
          label="Nouveau"
          icon="pi pi-plus"
          severity="success"
          onClick={openNew}
        />
        <Button
          label="Supprimer"
          icon="pi pi-trash"
          severity="danger"
          onClick={confirmDeleteSelected}
          disabled={!selectedProducts || !selectedProducts.length}
        />
      </div>
    );
  };

  const rightToolbarTemplate = () => {
    return (
      <div className="flex align-items-center justify-content-end gap-2">
        <Button className="action-btn" type="button" icon="pi pi-file" rounded onClick={() => exportCSV(false)} data-pr-tooltip="CSV" />
        <Button className="action-btn" type="button" icon="pi pi-file-excel" severity="success" rounded onClick={exportExcel} data-pr-tooltip="XLS" />
        <Button className="action-btn" type="button" icon="pi pi-file-pdf" severity="warning" rounded onClick={exportPdf} data-pr-tooltip="PDF" />
      </div>
    );
  };

  const actionBodyTemplate = (rowData: IEducatrice) => {
    return (
      <React.Fragment>
        <Button
          icon="pi pi-pencil"
          rounded
          outlined
          
          className="mr-2 action-btn"
          onClick={() => editProduct(rowData)}
        />
        <Button
          icon="pi pi-trash"
          rounded
          outlined
          severity="danger"
          className="action-btn"
          onClick={() => confirmDeleteProduct(rowData)}
        />
      </React.Fragment>
    );
  };

  const header = (
    <div className="flex flex-wrap gap-2 align-items-center justify-content-between">
      <h4 className="m-0">Rechercher</h4>
      <span className="p-input-icon-left">
   
        <InputText
          type="search"
          placeholder="Rechercher..."
          onInput={(e) => {
            const target = e.target as HTMLInputElement;
            setGlobalFilter(target.value);
          }}
        />
      </span>
    </div>
  );
  const productDialogFooter = (
    <React.Fragment>
      <Button
        label="Annuler"
        icon="pi pi-times"
        outlined
        onClick={hideDialog}
      />
      <Button label="Soumettre" icon="pi pi-check" onClick={handleSubmit} />
    </React.Fragment>
  );
  const deleteProductDialogFooter = (
    <React.Fragment>
      <Button
        label="Non"
        icon="pi pi-times"
        className="mr-2"
        outlined
        onClick={hideDeleteProductDialog}
      />
      <Button
        label="Oui"
        icon="pi pi-check"
        severity="danger"
        onClick={deleteProduct}
      />
    </React.Fragment>
  );
  const deleteProductsDialogFooter = (
    <React.Fragment>
      <Button
        label="Non"
        icon="pi pi-times"
        className="mr-2 "
        outlined
        onClick={hideDeleteProductsDialog}
      />
      <Button
        label="Oui"
        icon="pi pi-check"
        severity="danger"
        onClick={deleteSelectedProducts}
      />
    </React.Fragment>
  );

  const onUpload = () => {
    toast.current?.show({
      severity: "info",
      summary: "Success",
      detail: "Fichier téléchargé",
    });
  };
  return (
    <div className="p-3 users mt-5">
      <Toast ref={toast} />
      <div className="card">
      <Toolbar className="mb-4" left={leftToolbarTemplate} right={rightToolbarTemplate}></Toolbar>
        {/*//@ts-ignore */}
        <DataTable
          ref={dt}
          value={products}
          selection={selectedProducts}
          onSelectionChange={(e) => {
            if (Array.isArray(e.value)) {
              setSelectedProducts(e.value);
            }
          }}
          dataKey="id"
          paginator
          rows={10}
          rowsPerPageOptions={[5, 10, 25]}
          paginatorTemplate="FirstPageLink PrevPageLink PageLinks NextPageLink LastPageLink CurrentPageReport RowsPerPageDropdown"
          currentPageReportTemplate="Affichage {first} de {last}  à {totalRecords} utilisateurs"
          globalFilter={globalFilter}
          header={header}
        >
          <Column selectionMode="multiple" exportable={false}></Column>
          <Column field="nom" header="Nom " sortable></Column>
          <Column field="prenom" header="Prenom" sortable></Column>
          <Column sortable field="email" header="Email"></Column>
          {/* <Column field="matricule" header="Matricule" sortable></Column> */}
          <Column field="telephone" header="Telephone" sortable></Column>
          {/* <Column field="classe" header="Classe" sortable></Column>
          <Column field="niveau" header="Niveau" sortable></Column> */}

          <Column
            body={actionBodyTemplate}
            exportable={false}
            style={{ minWidth: "12rem" }}
          ></Column>
        </DataTable>
      </div>

      <Dialog
        visible={productDialog}
        style={{ width: "32rem" }}
        breakpoints={{ "960px": "75vw", "641px": "90vw" }}
        header="Créer"
        modal
        className="p-fluid"
        footer={productDialogFooter}
        onHide={hideDialog}
      >
        <div className="field">
          <label htmlFor="name" className="font-bold">
            Nom 
          </label>
          <InputText
            id="email"
            value={product.nom}
            onChange={(e) => onInputChange(e, "nom")}
            required
            autoFocus
            className={classNames({ "p-invalid": submitted && !product.nom })}
          />
          {submitted && !product.nom && (
            <small className="p-error">Veuillez saisir le nom.</small>
          )}
        </div>
        <div className="field">
          <label htmlFor="description" className="font-bold">
            Prenom
          </label>
          <InputText
            id="prenom"
            value={product.prenom}
            onChange={(e) => onInputChange(e, "prenom")}
            required
            autoFocus
            className={classNames({ "p-invalid": submitted && !product.nom })}
          />
        </div>

        <div className="field">
          <label htmlFor="description" className="font-bold">
            Email
          </label>
          <InputText
            id="email"
            value={product.email}
            onChange={(e) => onInputChange(e, "email")}
            required
            autoFocus
            className={classNames({ "p-invalid": submitted && !product.nom })}
          />
        </div>
        
        <div className="field">
          <label htmlFor="description" className="font-bold">
            Telephone
          </label>
          <InputText
            id="telephone"
            value={product.telephone}
            onChange={(e) => onInputChange(e, "telephone")}
            required
            autoFocus
            className={classNames({ "p-invalid": submitted && !product.nom })}
          />
        </div>
       

      </Dialog>

      <Dialog
        visible={deleteProductDialog}
        style={{ width: "32rem" }}
        breakpoints={{ "960px": "75vw", "641px": "90vw" }}
        header="Confirm"
        modal
        footer={deleteProductDialogFooter}
        onHide={hideDeleteProductDialog}
      >
        <div className="confirmation-content">
          <i
            className="pi pi-exclamation-triangle mr-3"
            style={{ fontSize: "2rem" }}
          />
          {product && (
            <span>
              Êtes vous sûr de vouloir supprimer <b>{product.nom} {product.id_educatrice}</b>?
            </span>
          )}
        </div>
      </Dialog>

      <Dialog
        visible={deleteProductsDialog}
        style={{ width: "32rem" }}
        breakpoints={{ "960px": "75vw", "641px": "90vw" }}
        header="Confirm"
        modal
        footer={deleteProductsDialogFooter}
        onHide={hideDeleteProductsDialog}
      >
        <div className="confirmation-content">
          <i
            className="pi pi-exclamation-triangle mr-3"
            style={{ fontSize: "2rem" }}
          />
          {product && <span>Êtes vous sûr de vouloir supprimer?</span>}
        </div>
      </Dialog>
    </div>
  );
}
