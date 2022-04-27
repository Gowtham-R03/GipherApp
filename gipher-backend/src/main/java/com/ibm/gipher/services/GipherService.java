package com.ibm.gipher.services;

import java.util.List;

import com.ibm.gipher.model.Gipher;

public interface GipherService {
	public List<Gipher> getGiphers();
	public Gipher addGipher(Gipher gipher);
	public void deleteGipher(String gipherId);
	public List<Gipher> getFavoritedBy(String favoritedBy);
}
