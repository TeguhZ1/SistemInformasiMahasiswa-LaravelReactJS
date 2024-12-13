<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

/**
 * @OA\Schema(title="Mahasiswas", description="Mahasiswas model",
 * @OA\Property(property="id", type="integer", format="int64", description="ID Mahasiswas"),
 * @OA\Property(property="nama", type="string", format="string", description="Nama Mahasiswas"),
 * @OA\Property(property="nim", type="string", format="string", description="NIM Mahasiswas"),
 * @OA\Property(property="fakultas", type="string", format="string", description="Fakultas Mahasiswas"),
 * )
 */

class Mahasiswa extends Model
{
    // Menentukan tabel yang digunakan oleh model
    protected $table = 'mahasiswas';

    // Menentukan kolom yang dapat diisi secara massal
    protected $fillable = [
        'nama',
        'nim',
        'fakultas',
    ];
}
