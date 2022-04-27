package com.ibm.gipher.services;

import java.util.List;

import com.ibm.gipher.model.Recommended;

public interface RecommendedService {
	public List<Recommended> getRecomGif();
	public Recommended addRecomGif(Recommended recommended);
	public void deleteRecomGif(String recomId);
	public List<Recommended> getRecommendedBy(String recommendedBy);
}
