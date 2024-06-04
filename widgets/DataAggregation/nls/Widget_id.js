// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See http://js.arcgis.com/3.15/esri/copyright.txt and http://www.arcgis.com/apps/webappbuilder/copyright.txt for details.
//>>built
define({"widgets/DataAggregation/nls/strings":{_widgetLabel:"Agregasi Data",startPage:{defaultStartPageInstructions:"Widget ini akan membantu pemrosesan dan pengiriman data dari file ke layer yang dipilih di peta.\x3cbr/\x3e \x3cbr/\x3e Nilai dalam file harus tidak dibatasi koma, tab, titik koma, atau bilah vertikal.",dragDrop:"Seret dan lepaskan",browse:"Telusuri ke File",or:"ATAU",userPrivilege:"Akun Anda tidak memiliki izin untuk membuat atau mengubah data.",userCredits:"${widgetName} memerlukan kredit untuk menggunakan penentu lokasi ${locator}.",
contactAdmin:"Hubungi administrator organisasi untuk meminta kredit tambahan.",contactAdminEdit:"Hubungi administrator organisasi untuk meminta hak istimewa pengeditan.",canUseLocator:"Penentu lokasi ${locator} akan digunakan untuk menentukan lokasi fitur.",notEnoughCredits:"Kredit tidak cukup.",locationAndField:"Lokasi dan Informasi Lapangan",locationAndFieldHint:"Pilih nilai dari file yang seharusnya digunakan untuk memperbarui layer target.",cannotUseLocator:"Tidak dapat menggunakan ${widgetName}",
noAnonymousEdit:"Layer ${layerName} tidak mendukung pengeditan anonim.",pleaseLogin:"Masuk ke organisasi ${org} atau hubungi administrator organisasi untuk meminta pengeditan anonim diaktifkan.",invalidEdit:"Hak Istimewa Tidak Valid",unableToAccess:"Tidak dapat mengakses ${layerName}",appropriateCredentials:"Verifikasikan bahwa Anda telah masuk dengan kredensial yang sesuai.",shared:"Hubungi administrator organisasi untuk meminta akses ke layer ${layerName}.",targetLayerLabel:"Layer Target",homeButtonLabel:"Beranda",
mappingErrorMsg:"Klik panah di samping untuk menentukan kolom"},mapping:{schemaMapping:"Informasi Kolom",schemaMappingHint:"Pilih kolom dari file yang berkorelasi dengan kolom di layer.",locationMapping:"Informasi Lokasi",locationMappingHint:"Pilih tipe alamat atau informasi koordinat yang diharapkan dari file."},locationMapping:{locationMappingPageHint:"Pilih tipe lokasi",useAddress:"Temukan menggunakan alamat",useAddressHint:"Data berisi informasi alamat",useCoordinates:"Temukan dengan koordinat",
useCoordinatesHint:"Data berisi nilai koordinat X/Y"},address:{addressPageHint:"Pilih tipe alamat",singleField:"Kolom tunggal",singleFieldHint:"Pilih kolom yang berisi informasi alamat",multiField:"Kolom ganda",multiFieldHint:"Pilih kolom yang berisi informasi alamat"},coordinates:{coordinatesPageHint:"Pilih kolom yang berisi data koordinat"},fieldMapping:{fieldMappingPageHint:"Pilih kolom sumber yang memetakan hingga kolom target",sourceField:"Kolom Sumber yang Cocok",targetField:"Kolom Target"},
buttons:{addToMap:"Tambahkan ke Peta",submit:"Kirim",download:"Unduhan"},review:{matched:"Ditemukan",reviewMatched:"Lokasi Ditemukan",reviewMatchedHint:"Tinjau lokasi yang ditemukan.",unMatched:"tidak Ditemukan",reviewUnMatched:"Lokasi tidak Ditemukan",reviewUnMatchedHint:"TInjau lokasi yang tidak ditemukan. Item yang tidak dibenarkan tidak akan dikirimkan.",duplicate:"Duplikat",reviewDuplicate:"Lokasi Duplikat",reviewDuplicateHint:"Tinjau lokasi yang sudah ditemukan di layer. Item yang tidak disebutkan tidak akan dikirimkan.",
reviewLabelWithCount:"${totalMatchedFeatures} ${headerString} ${headerStringHint}",use:"Gunakan:",fromLayer:"Informasi Target",target:"Target",source:"Sumber",fromFile:"Informasi Sumber",locationControlHint:"Tinjau informasi alamat",duplicateAction:"Pilih tindakan.",item:"Catatan:",locateFeature:"Tentukan Lokasi Fitur",removeFeature:"Hapus Fitur",featureLocated:"Lokasi Ditemukan",valuesDoNotMatch:"Tidak cocok dengan nilai yang ada",sync:"Sinkronkan informasi alamat dengan informasi lapangan",noFeaturesSaved:"Tidak ada fitur yang berhasil disimpan",
someFeaturesSaved:"${num} fitur berhasil disimpan.",someFeaturesNotSaved:"${num} fitur tidak berhasil disimpan.",feature:"Tinjau Informasi Fitur",locationInfo:"Tinjau Informasi Lokasi",selectValue:"Pilih Nilai",reviewData:"Tinjau Data",reviewDataHint:"Tinjau data Anda sebelum mengirimkan ke layer.",reviewFeatureHint:"Tinjau atau edit fitur dan informasi lokasi Anda.",duplicateModify:"Duplikat, memerlukan perubahan",duplicateSave:"Simpan sebagai fitur baru"},warningsAndErrors:{invalidCSV:"Kesalahan mengambil item dari CSV, periksa apakah file CSV valid yang dipilih.",
noLayersWarning:"Tidak ada layer target valid yang dikonfigurasi, periksa konfigurasi.",loadWarning:"Widget ini memerlukan sumber data Feature Service. Konfigurasikan widget untuk menentukan sumber data.",saveError:"Kesalahan saat menyimpan fitur.",consumesCredits:"Alat ini mengurangi kredit saat digunakan dengan ArcGIS Online World Geocoding Service",noValue:"Pilih kolom",mappingTitle:"",locationMappingComplete:"Pemetaan Lokasi Selesai",fieldMappingComplete:"Pemetaan Kolom Selesai",settingsCleared:"Pengaturan akan dihapus.",
proceed:"Apakah Anda ingin melanjutkan?",itemMoveMatch:"Item ditentukan lokasinya dan dipindahkan ke daftar lokasi ditemukan",itemMoveUnMatched:"Tidak dapat menentukan lokasi item. Dipindah ke daftar lokasi tidak ditemukan.",itemWillBeLocated:"Item akan dihapus dari daftar lokasi duplikat.",cannotLocate:"Tidak dapat menentukan lokasi item. Verifikasi informasi lokasi.",invalidMessage:"Nilai yang tidak valid.",rangeMessage:"Nilai harus kurang dari ${num} karakter.",locatorError:"Penentu Lokasi Tidak Valid atau Tidak Dapat Diakses.",
notConfigured:"penentu lokasi tidak dikonfigurasikan untuk opsi penentuan lokasi saat ini",noMoreLocators:"tidak ada penentu lokasi tambahan yang dikonfigurasikan"},featureToolbar:{locate:"Tentukan lokasi",save:"Simpan catatan",cancel:"Batalkan editan",cancelTitle:"Batalkan Editan",cancelMessage:"Batalkan editan pada catatan saat ini?"},_localized:{}}});