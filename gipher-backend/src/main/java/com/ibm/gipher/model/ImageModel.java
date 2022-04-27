package com.ibm.gipher.model;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Lob;
import javax.persistence.Table;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Entity
@Table(name = "image_table")
public class ImageModel {
	public ImageModel() {
		super();
	}

	public ImageModel(String name, String type, String picByte) {
		this.name = name;
		this.type = type;
		this.picByte = picByte;
	}

	@Id
	@Column(name = "id")
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long id;

	@Column(name = "name")
	private String name;

	@Column(name = "type")
	private String type;

    //image bytes can have large lengths so we specify a value
    //which is more than the default length for picByte column
	@Lob
	@Column(name = "picByte", length=100000000)
	private String picByte;

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public String getType() {
		return type;
	}

	public void setType(String type) {
		this.type = type;
	}

	public String getPicByte() {
		return picByte;
	}

	public void setPicByte(String picByte) {
		this.picByte = picByte;
	}
}
